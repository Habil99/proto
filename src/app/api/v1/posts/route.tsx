import { NextRequest } from "next/server";
import withCurrentUser from "@/lib/with-current-user";
import { z } from "zod";
import cloudinaryUploader from "@/lib/cloudinary-uploader";
import prisma from "@/db";
import { revalidateTag } from "next/cache";

export const POST = async (request: NextRequest) =>
  withCurrentUser(request, async (currentUser) => {
    if (!currentUser) {
      return new Response("Unauthorized", { status: 401 });
    }

    const formData = await request.formData();

    const title = formData.get("title");
    const content = JSON.parse(formData.get("content") as string);
    const thumbnail = formData.get("thumbnail") as string;
    const publish = formData.get("publish") === "1";

    if (!title || !content || !thumbnail) {
      return Response.json(
        {
          message: "Please fill out all fields",
        },
        { status: 400 },
      );
    }

    try {
      const validatedPost = z
        .object({
          title: z.string().min(12),
          content: z.array(z.any()),
        })
        .parse({ title, content });

      const uploadApiResponse = await cloudinaryUploader.upload(
        thumbnail,
        {
          allowed_formats: ["webp", "png", "jpg", "jpeg"],
        },
        (error, result) => {
          if (error) {
            throw new Error(error?.message);
          }

          return result?.url;
        },
      );

      const { title: validatedTitle, content: validatedContent } =
        validatedPost;

      const post = await prisma.post.create({
        data: {
          title: validatedTitle,
          authorId: currentUser.id,
          content: validatedContent,
          thumbnail: uploadApiResponse.url,
          published: publish,
        },
      });

      revalidateTag("posts");
      return Response.json(post, { status: 201 });
    } catch (e) {
      return Response.json(e, { status: 500 });
    }
  });
