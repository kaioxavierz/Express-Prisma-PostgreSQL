import jwt from "jsonwebtoken";

export function createToken(payload: object) {
    return jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '1h' });
}