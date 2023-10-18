import ResponseEntity from "@/shared/response-entity";
import { authService } from "@/services";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  try {
    const { user, token, expires } = await authService.signIn({
      email,
      password,
    });

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
