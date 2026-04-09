export interface IUserInterface {
    name: string;
    email: string; 
    password: string;
}

export interface IUserService {
     createUser(user: IUserInterface): Promise<IUserInterface>;
     findAll(): Promise<IUserInterface[]>;
     findById(userId: string): Promise<IUserInterface | null>;
     updateUser(userId: string, newUser: IUserInterface): Promise<IUserInterface>;
     deleteUser(userId: string): Promise<void>;
     comparePassword(password: string, hash: string): Promise<boolean>;
}

export interface IUserController {
     index(): Promise<IUserInterface[]>;
     show(req: any, res: any): Promise<IUserInterface>;
     store(req: any, res: any): Promise<IUserInterface>;
     update(req: any, res: any): Promise<IUserInterface>;
     delete(req: any, res: any): Promise<void>;
}