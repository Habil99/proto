import { z } from "zod";
import ResponseEntity from "@/shared/response-entity";
import { authService } from "@/services";

export async function POST(request: Request) {
  const { name, email, password } = await request.json();

  const schema = z.object({
    name: z.string().min(3).max(255),
    email: z.string().email(),
    password: z
      .string()
      .min(8)
      .max(255)
      .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
  });

  const parseResult = schema.safeParse({ name, email, password });

  if (!parseResult.success) {
    return new Response(JSON.stringify(parseResult.error), { status: 400 });
  }

  try {
    const { user, token, expires } = await authService.signUp({
      name: parseResult.data.name,
      email: parseResult.data.email,
      password: parseResult.data.password,
    });

    return Response.json(
      new ResponseEntity(201, {
        token,
        user,
      }),
      {
        status: 201,
        headers: {
          "Set-Cookie": `token=${token}; Path=/; Expires=${expires}; SameSite=Strict`,
        },
      },
    );
  } catch (e) {
    return new Response(JSON.stringify(e), { status: 500 });
  }
}
