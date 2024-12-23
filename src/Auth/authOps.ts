// /d:/Projects/WhisperNet/src/Auth/AuthOps.ts

import bcrypt from "bcrypt";
import { PassThrough } from "stream";

const hashPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    return await bcrypt.compare(password, hashedPassword);
}

export { hashPassword, comparePassword };