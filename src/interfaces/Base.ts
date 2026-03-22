import { Base } from "@prisma/client";

export interface IUBaseDTO{
    name: string;
    code: string;
    password: string;
}

export interface IUBaseService  {
    create(data: IUBaseDTO): Promise<Base>;
    findById(id: string): Promise<Base | null>;
    update(id: string, newData: IUBaseDTO): Promise<Base>;
    delete(id: string): Promise<void>;
}