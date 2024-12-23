// File: /d:/Projects/WhisperNet/src/util/generateUID.ts

import bcrypt from "bcrypt";
import { cyan } from "./colours.js";

// creates UID for users & guest, based on the type of user,
// USERNAME, doj using hash function

const generateUID = async (USERNAME: string, PASSWORD: string, TYPE: "USER" = "USER"): Promise<string> => {
    const type = TYPE.toLowerCase();
    const salt = await bcrypt.genSalt(10);
    const finalString = `${type}-${USERNAME.toLowerCase()}-${PASSWORD.toLowerCase()}`;
    const hashedUID = await bcrypt.hash(finalString, salt);
    console.log("hashed UID = ", cyan(hashedUID));
    return hashedUID;
}

export default generateUID;