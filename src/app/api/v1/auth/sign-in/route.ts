import prisma from "@/db";
import createToken from "@/app/api/v1/auth/create-token";
import ResponseEntity from "@/shared/response-entity";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  try {
    const user = await prisma.user.findFirstOrThrow({
      where: {
        email,
        password,
      },
    });

    const { token, expires } = createToken(user.id);

    return Response.json(
      new ResponseEntity(201, {
        token,
        user,
      }),
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
