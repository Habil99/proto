import { NextRequest } from "next/server";
import withCurrentUser from "@/lib/with-current-user";
import prisma from "@/db";
import { z } from "zod";

export const POST = async (request: NextRequest) =>
  withCurrentUser(request, async (request, currentUser) => {
    if (!currentUser) {
      return new Response("Unauthorized", { status: 401 });
    }

    const { title, content, publish } = await request.json();

    const childrenSchema = z.object({
      id: z.optional(z.string()),
      text: z.string(),
      code: z.optional(z.boolean()),
      italic: z.optional(z.boolean()),
      bold: z.optional(z.boolean()),
      underline: z.optional(z.boolean()),
      strikethrough: z.optional(z.boolean()),
      inlineCode: z.optional(z.boolean()),
      link: z.optional(z.string()),
    });

    // merge childrenSchema with itself
    const nestedChildrenSchema = z.object({
      ...childrenSchema.shape,
      children: z.optional(z.array(childrenSchema)),
    });

    const postSchema = z.object({
      title: z.string().min(12),
      content: z.array(
        z.object({
          id: z.string(),
          type: z.string(),
          url: z.optional(z.string()),
          children: z.optional(z.array(nestedChildrenSchema)),
        }),
      ),
    });

    try {
      const validatedPost = z
        .object({
          title: z.string().min(12),
          content: z.array(z.any()),
        })
        .parse({ title, content });
      const { title: validatedTitle, content: validatedContent } =
        validatedPost;
      const post = await prisma.post.create({
        data: {
          title: validatedTitle,
          authorId: currentUser.id,
          content: validatedContent,
          published: publish,
        },
      });

      return Response.json(post, { status: 201 });
    } catch (e) {
      return new Response(JSON.stringify(e), { status: 500 });
    }
  });
