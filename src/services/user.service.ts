import GenericService from "@/services/generic.service";

class UserService extends GenericService {
  constructor() {
    super();
  }

  async findByUserId(userId: string): Promise<
    | {
        success: true;
        user: any;
      }
    | {
        success: false;
        error: any;
      }
  > {
    try {
      const user = await this.prisma.user.findFirst({
        where: { id: userId },
        select: {
          id: true,
          name: true,
          email: true,
        },
      });

      return {
        user,
        success: true,
      };
    } catch (e) {
      return {
        success: false,
        error: e,
      };
    }
  }
}

export const userService = new UserService();
