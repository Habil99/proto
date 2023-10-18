import prisma from "@/db";
import createToken from "@/app/api/v1/auth/create-token";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  try {
    const user = await prisma.user.findFirstOrThrow({
      where: {
        email,
        password,
      },
    });

    const exists = await prisma.token.findFirst({
      where: {
        user: {
          id: user.id,
        },
      },
    });

    if (exists) {
      await prisma.token.delete({
        where: {
          id: exists.id,
        },
      });
    }

    const { token, expires } = createToken(user.id);

    return Response.json(
      {
        token,
        user,
      },
      {
        status: 201,
        headers: {
          "Set-Cookie": `token=${token}; HttpOnly; Path=/; Expires=${expires}; SameSite=Strict`,
        },
      },
    );
  } catch (e) {
    return new Response(JSON.stringify(e), { status: 500 });
  }
}

// TODO: create base response class that makes it easier to return responses in a consistent way and inherit from Response
