import GenericService from "@/services/generic.service";
import jwt from "jsonwebtoken";

class AuthService extends GenericService {
  constructor() {
    super();
  }

  async signIn({ email, password }: { email: string; password: string }) {
    const user = await this.prisma.user.findFirstOrThrow({
      where: {
        email,
        password,
      },
    });

    const { token, expires } = this.createToken(user.id);

    return {
      user,
      token,
      expires,
    };
  }

  async signUp({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) {
    const user = await this.prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    const { token, expires } = this.createToken(user.id);

    return {
      user,
      token,
      expires,
    };
  }

  private createToken(userId: string): {
    token: string;
    expires: Date;
  } {
    const EXPIRES_IN = 1000 * 60 * 60 * 24; // 1 day
    const expires = new Date(Date.now() + EXPIRES_IN);

    return {
      token: jwt.sign({ userId }, process.env.JWT_SECRET as string, {
        expiresIn: EXPIRES_IN,
      }),
      expires,
    };
  }
}

export const authService = new AuthService();
