import { Prisma } from "@prisma/client";
import { AppError } from "../utils/appError";
import { IUserBaseInterface } from "../interfaces/User-base";

export class UserBaseService implements IUserBaseInterface {
    association(userId: string, baseId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    disassociation(userId: string, baseId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findBasesByUserId(userId: string): Promise<any[]> {
        throw new Error("Method not implemented.");
    }
    
}