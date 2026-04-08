import { prisma } from "../client";
import { AppError } from "../utils/appError";
import { IUserBaseInterface } from "../interfaces/User-base";

export class UserBaseService implements IUserBaseInterface {
  async addUserToBase(userId: string, baseId: string, role: string): Promise<void> {
    await prisma.userBase.create({
      data: {
        userId,
        baseId,
        role
      }
    });
  }
  async getBasesFromUser(userId: string) {
    return prisma.userBase.findMany({
      where: { userId },
      include: {
        base: true
      }
    });
  }
  async getUsersFromBase(baseId: string) {
    return prisma.userBase.findMany({
      where: { baseId },
      include: {
        user: true
      }
    });
  }
  async updateUserRole(userId: string, baseId: string, newRole: string): Promise<void> {
    await prisma.userBase.update({
      where: {
        userId_baseId: {
          userId: userId,
          baseId: baseId
        }
      },
      data: { role: newRole }
    });
  }

  async removeUserFromBase(userId: string, baseId: string): Promise<void> {
    await prisma.userBase.delete({
      where: {
        userId_baseId: {
          userId: userId,
          baseId: baseId
        }
      }
    });
  }

}