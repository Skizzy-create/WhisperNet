import bcrypt from "bcrypt";

// creates UID for users & guest, based on the type of user,
// username, doj using hash function


const generateUID = async (type: "user" | "guest", username: string, doj: Date, password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    const finalString = `${type}-${username}-${password}-${doj.toString()}`;
    console.log("final string = ", finalString);
    const hashedUID = await bcrypt.hash(finalString, salt);
    console.log("hashed UID = ", hashedUID);
    return hashedUID;
}

export default generateUID;