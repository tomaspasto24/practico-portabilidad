import { compare, hash } from "bcryptjs"

const encrypt = async (password: string) => {
    const passwordHash = await hash(password, 8);
    return passwordHash;
}

const verified = async (pass: string, passHash: string) => {
    const isCorrect = await compare(pass, passHash);
    return isCorrect;
}

export { encrypt, verified}