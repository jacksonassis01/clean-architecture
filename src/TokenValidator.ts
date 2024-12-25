import { sign } from 'jsonwebtoken';


export async function createToken(email: string, secret: string) {
    const token = sign({ email, iat: (new Date()).getTime(), expiresIn: 100000000, }, secret);
    return token;
}