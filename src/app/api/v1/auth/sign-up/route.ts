import prisma from "@/db";
import { z } from "zod";
import createToken from "@/app/api/v1/auth/create-token";

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
    const user = await prisma.user.create({
      data: {
        name: parseResult.data.name,
        email: parseResult.data.email,
        password: parseResult.data.password,
      },
    });

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
