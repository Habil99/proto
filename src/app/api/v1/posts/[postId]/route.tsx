import { NextRequest } from "next/server";
import withCurrentUser from "@/lib/with-current-user";
import { getReasonPhrase, StatusCodes } from "http-status-codes";
import prisma from "@/db";
import { z } from "zod";
import cloudinaryUploader from "@/lib/cloudinary-uploader";

export const GET = async (
  request: NextRequest,
  {
    params,
  }: {
    params: {
      postId: string;
    };
  },
) =>
  withCurrentUser(request, async (currentUser) => {
    if (!currentUser) {
      return Response.json(
        {
          error: getReasonPhrase(StatusCodes.UNAUTHORIZED),
        },
        { status: StatusCodes.UNAUTHORIZED },
      );
    }

    try {
      const post = await prisma.post.findFirstOrThrow({
        where: {
          id: params.postId,
          authorId: currentUser.id,
        },
        select: {
          id: true,
          title: true,
          content: true,
          thumbnail: true,
          published: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      return Response.json(post);
    } catch (e) {
      return Response.json(
        {
          error: getReasonPhrase(StatusCodes.NOT_FOUND),
        },
        {
          status: StatusCodes.NOT_FOUND,
        },
      );
    }
  });

export const PUT = async (
  request: NextRequest,
  {
    params,
  }: {
    params: {
      postId: string;
    };
  },
) =>
  withCurrentUser(request, async (currentUser) => {
    if (!currentUser) {
      return Response.json(
        {
          error: getReasonPhrase(StatusCodes.UNAUTHORIZED),
        },
        { status: StatusCodes.UNAUTHORIZED },
      );
    }

    const formData = await request.formData();

    const title = formData.get("title");
    const content = JSON.parse(formData.get("content") as string);
    const thumbnail = formData.get("thumbnail") as string;
    const publish = formData.get("publish") === "1";

    if (!title || !content) {
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

      const post = await prisma.post.findFirstOrThrow({
        where: {
          id: params.postId,
          authorId: currentUser.id,
        },
      });

      let uploadApiResponse = null;

      if (thumbnail && post.thumbnail !== thumbnail) {
        uploadApiResponse = await cloudinaryUploader.upload(
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
      }

      const { title: validatedTitle, content: validatedContent } =
        validatedPost;

      const updatedPost = await prisma.post.update({
        data: {
          title: validatedTitle,
          content: validatedContent,
          ...(uploadApiResponse && { thumbnail: uploadApiResponse.url }),
          published: publish,
        },
        where: {
          id: params.postId,
          authorId: currentUser.id,
        },
      });

      return Response.json(updatedPost, { status: 201 });
    } catch (e) {
      return Response.json(e, { status: 500 });
    }
  });

export const DELETE = async (
  request: NextRequest,
  {
    params,
  }: {
    params: {
      postId: string;
    };
  },
) =>
  withCurrentUser(request, async (currentUser) => {
    if (!currentUser) {
      return Response.json(
        {
          error: getReasonPhrase(StatusCodes.UNAUTHORIZED),
        },
        {
          status: StatusCodes.UNAUTHORIZED,
        },
      );
    }

    const postId = params.postId;

    try {
      const deletedPost = await prisma.post.delete({
        where: {
          id: postId,
          authorId: currentUser.id,
        },
      });

      return Response.json(deletedPost);
    } catch (e) {
      return Response.json(
        {
          error: getReasonPhrase(StatusCodes.NOT_FOUND),
        },
        {
          status: StatusCodes.NOT_FOUND,
        },
      );
    }
  });
