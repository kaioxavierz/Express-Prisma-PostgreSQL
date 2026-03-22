import "dotenv/config";
import { prisma } from "../client";
import { AppError } from "../utils/appError";
import { Base, Prisma, Product } from "@prisma/client";
import { IUBaseDTO, IUBaseService } from "../interfaces/Base";

export class BaseService implements IUBaseService {
   

    async create(data: IUBaseDTO): Promise<Base> {
        const newCode = generateCode(1000, 99999);

        const baseExists = await prisma.base.findFirst({
            where: { name: data.name }
        });
        if (baseExists) {
            throw new AppError("Essa base já existe", 400);
        }
        return prisma.base.create({ data: { ...data, code: newCode } });
    }

    async findById(code: string): Promise<Base | null> {
       return prisma.base.findUnique({ where: { code: code }});
    }

    async update(code: string, newData: IUBaseDTO): Promise<Base> {
       const base = await this.findById(code);
       return prisma.base.update({
            where: { code: code },
            data: newData
        });
    }

    async delete(code: string): Promise<void> {
        await this.findById(code);
        await prisma.base.delete({
            where: { code: code }
        });
    }    
}

function generateCode(min: number, max: number): string {
    const code =Math.floor(Math.random() * (max - min + 1)) + min; 
    return code.toString();
}