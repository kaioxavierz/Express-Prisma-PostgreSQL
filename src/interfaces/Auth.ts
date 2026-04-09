export interface IULoginService {
    login(email: string, password: string): Promise<{ token: string }>;
}
