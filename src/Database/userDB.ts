// /d:/Projects/WhisperNet/src/Database/userDB.ts

import { hashPassword } from "../Auth/authOps.js";
import { ErrorRED, SuccessGREEN, WarningYELLOW } from "../util/colours.js";
import fs from 'fs';
import generateUID from "../util/generateUID.js";

interface User {
    username: string;
    uid: string;
    password: string;
    dateOfJoining: Date;
    RoomId?: string[];
    socketId?: string;
};

class userDatabase {
    private users: User[] = [];

    constructor() {
        console.log("User Database initialized!");
        this.loadUsers();
    }

    private loadUsers = async (): Promise<void> => {
        console.log("Loading User data ....");
        try {
            const data = await fs.promises.readFile("data.json", "utf-8");
            if (!data) {
                console.log(WarningYELLOW("No data found!"));
                return;
            }
            const users = JSON.parse(data);
            this.users = users;
            console.log(SuccessGREEN("User loaded sucessfully!"));
        } catch (error) {
            console.log(ErrorRED("Error while loading users!"))
            console.error(error);
        }
    };

    public checkDuplicateUser = async (username: string,): Promise<boolean> => {
        try {
            await this.logDataTofile();
            console.log("Checking for duplicate users...");
            const user = this.users.find((user) => user.username === username);
            if (user) {
                console.log(WarningYELLOW("User already exists!"));
                const { password, ...userWithoutPassword } = user;
                console.log(userWithoutPassword);
                return true;
            }
            console.log(SuccessGREEN("User does not exist!"));
            return false;
        } catch (error) {
            console.log(ErrorRED("Error while checking for duplicate users!"));
            console.error(error);
            return true;
        }
    };

    public createUser = async (username: string, password: string, dateOfJoining: Date, RoomId: string[]): Promise<User | null> => {
        console.log("Initializing Create User...");
        const hashedPassword = await hashPassword(password);
        const abort = await this.checkDuplicateUser(username,);
        const hashedUid = await generateUID(username, password,);
        if (abort) {
            console.log(WarningYELLOW("Aborting user creation!"));
            return null;
        }
        const user: User = { username, uid: hashedUid, dateOfJoining, RoomId, password: hashedPassword };
        this.users.push(user);
        console.log(SuccessGREEN("User created successfully!"));
        await this.logDataTofile();
        return user;
    };

    private fetchUserId = async (username: string,): Promise<string | null> => {
        try {
            console.log(WarningYELLOW("Fetching user ID..."));
            const userId = this.users.find((user) => user.username === username);
            if (userId) {
                console.log(SuccessGREEN("User ID found!"));
                await this.logDataTofile();
                return userId.uid;
            }
            console.log(WarningYELLOW("User ID not found!"));
            await this.logDataTofile();
            return null;
        } catch (error) {
            console.log(ErrorRED("Error fetching user ID"));
            return null;
        }
    };

    public findOne = (criteria: Partial<User>, matchAll: boolean = false): Partial<User> | null => {
        console.log("Looking for one user...");
        try {
            const user = this.users.find((user) => {
                const conditions = [
                    criteria.username ? user.username === criteria.username : true,
                    criteria.uid ? user.uid === criteria.uid : true,
                    criteria.dateOfJoining ? user.dateOfJoining === criteria.dateOfJoining : true,
                    criteria.socketId ? user.socketId === criteria.socketId : true,
                ];
                return matchAll ? conditions.every(Boolean) : conditions.some(Boolean);
            });
            if (!user) {
                console.log(WarningYELLOW("User not found!"));
                return null;
            }
            console.log(SuccessGREEN("User found!"));
            console.log(user);
            return user;
        } catch (error) {
            console.log(ErrorRED("Error - FindOne --> User DB"));
            console.error(error);
            return null;
        }
    };

    private logDataTofile = async (): Promise<void> => {
        console.log("Logging data to file...");
        const dataWithNewLines = JSON.stringify(this.users, null, 2);
        try {
            await fs.promises.writeFile('data.json', dataWithNewLines);
            console.log(SuccessGREEN("Data logged to file successfully!"));
        } catch (error) {
            console.log(ErrorRED("Error while logging data to file!"));
            console.error(error);
        };
    };

    public updatePassword = async (username: string, UID: string, newPassword: string): Promise<boolean> => {
        try {
            console.log("Updating password...");
            const user = this.users.find((user) => user.username === username && user.uid === UID);
            if (!user) {
                console.log(WarningYELLOW("User not found!"));
                return false;
            }
            const hashedPassword = await hashPassword(newPassword);
            user.password = hashedPassword;
            await this.logDataTofile();
            console.log(SuccessGREEN("Password updated successfully!"));
            return true;
        } catch (error) {
            console.log(ErrorRED("Error while updating password!"));
            console.error(error);
            return false;
        };
    };
}

export default userDatabase;

// Function names from the UserDatabase class
// checkDuplicateUser ✅
// createUser ✅
// fetchUserId ✅
// findOne
// findUserById
// deleteUser
// updateUser
// listAllUsers
// findAll