import { z } from "zod";

export const authSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Senha obrigatória"),
});

export type LoginInput = z.infer<typeof authSchema>;