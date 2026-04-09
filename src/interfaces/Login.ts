export interface IULoginService {
    login(email: string, password: string): Promise<{ token: string }>;
    register(name: string, email: string, password: string): Promise<void>;
}
