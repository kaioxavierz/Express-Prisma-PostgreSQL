import { Prisma } from "@prisma/client";

export interface IUserBaseInterface {
    association(userId: string, baseId: string): Promise<void>;
    disassociation(userId: string, baseId: string): Promise<void>;
    findBasesByUserId(userId: string): Promise<any[]>;
}