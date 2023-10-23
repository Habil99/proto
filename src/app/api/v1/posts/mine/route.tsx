import { NextRequest } from "next/server";
import withCurrentUser from "@/lib/with-current-user";
import { getReasonPhrase, StatusCodes } from "http-status-codes";
import prisma from "@/db";

export const GET = async (request: NextRequest) =>
  withCurrentUser(request, async (request, currentUser) => {
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

    try {
      const posts = await prisma.post.findMany({
        where: {
          authorId: currentUser.id,
        },
        select: {
          id: true,
          title: true,
          content: true,
          thumbnail: true,
          published: true,
          author: true,
          authorId: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      return Response.json(posts);
    } catch (e) {}
    return Response.json(
      {
        error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
      },
      {
        status: StatusCodes.INTERNAL_SERVER_ERROR,
      },
    );
  });
