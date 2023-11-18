import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || 'token.01010101';

const generateToken = async (id: string) => {
    const jwt = sign(
        { id },
        JWT_SECRET,
        { expiresIn: "2h"}
    );
    return jwt;
}

const verifyToken = (token: string) => {
    const isOk = verify(token, JWT_SECRET);
    return isOk;
}

export { generateToken, verifyToken };