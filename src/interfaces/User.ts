export interface IUserInterface {
    name: string;
    email: string; 
    password: string;
}

export interface IUserService {
     createUser(user: IUserInterface): Promise<IUserInterface>;
     findAll(): Promise<IUserInterface[]>;
     findById(userId: number): Promise<IUserInterface | null>;
     updateUser(userId: number, newUser: IUserInterface): Promise<IUserInterface>;
     deleteUser(userId: number): Promise<void>;
}

export interface IUserSeController {
     index(): Promise<IUserInterface[]>;
     show(req: any, res: any): Promise<IUserInterface>;
     store(req: any, res: any): Promise<IUserInterface>;
     update(req: any, res: any): Promise<IUserInterface>;
     delete(req: any, res: any): Promise<void>;
}