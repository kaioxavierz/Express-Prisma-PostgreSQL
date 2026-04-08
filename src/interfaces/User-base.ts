import { Prisma } from "@prisma/client";

export interface IUserBaseInterface {
    addUserToBase(userId: string, baseId: string, role?: string): Promise<void>;
    removeUserFromBase(userId: string, baseId: string): Promise<void>;
    getUsersFromBase(baseId: string): Promise<any[]>;
    getBasesFromUser(userId: string): Promise<any[]>;
    updateUserRole(userId: string, baseId: string, newRole: string): Promise<void>;
}