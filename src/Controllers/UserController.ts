import { prisma } from "../../prisma/client";


/*
export class UserController implements UserModel {
    showAllUsers(): UserInterface[] {
        throw new Error("Method not implemented");
    }
    createUser(user: UserInterface): UserInterface {
        throw new Error("Method not implemented");
    }
    findUser(userId: number): UserInterface | null {
        throw new Error("Method not implemented");
    }
    deleteUser(userId: number): void {
        throw new Error("Method not implemented");
    }
}

*/


//export async class createUser(req: any, res: any) {
//   const { name, email } = req.body
//
//    const user = await prisma.user.create({
//        data: { name, email},
//    });
//    
//    return res.json(user);
//}