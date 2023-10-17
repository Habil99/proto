import prisma from "@/db";
import { z } from "zod";
import jwt from "jsonwebtoken";

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

    const EXPIRES_IN = 1000 * 60 * 60 * 24 * 365 * 10; // 10 years
    const expires = new Date(Date.now() + EXPIRES_IN);

    const token = await prisma.token.create({
      data: {
        token: jwt.sign({ id: user.id }, process.env.JWT_SECRET as string),
        user: {
          connect: {
            id: user.id,
          },
        },
        expires,
      },
    });

    return Response.json(
      {
        token: token.token,
        user,
      },
      { status: 201 },
    );
  } catch (e) {
    return new Response(JSON.stringify(e), { status: 500 });
  }
}

// TODO: create base response class that makes it easier to return responses in a consistent way and inherit from Response
