import { ErrorRED, InfoBLUE, NoticeORANGE, StrangeMAGENTA, SuccessGREEN, WarningYELLOW } from "../util/colours.js";
import fs from 'fs';
// Interface for guest users
interface User {
    username: string;
    uid: string;
    dateOfJoining: Date;
    RoomId?: string[];
    socketId?: string;
    password?: string;
}
class userDatabase {
    private users: User[] = [];

    constructor() {
        console.log(InfoBLUE("User Database initialized!"));
    }

    public checkDuplicateUser = async (username: string, password: string): Promise<boolean> => {
        try {
            console.log(NoticeORANGE("Checking for duplicate users..."));
            const user = this.users.find((user) => user.username === username && user.password === password);
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
    }

    public createUser = async (username: string, password: string, uid: string, dateOfJoining: Date, RoomId: string[]): Promise<void> => {
        const abort = await this.checkDuplicateUser(username, password);
        if (abort) {
            console.log(WarningYELLOW("Aborting user creation!"));
            return;
        }
        const user: User = {
            username,
            uid,
            dateOfJoining,
            RoomId,
            password
        }
        this.users.push(user);
        console.log(SuccessGREEN("User created successfully!", user.uid));
        await this.logDataTofile();
    };

    public fetchUserId = async (username: string, password: string): Promise<string | null> => {
        console.log(NoticeORANGE("Fetching user ID..."));
        const userId = this.users.find((user) => user.username === username && user.password === password);
        if (userId) {
            console.log(SuccessGREEN("User ID found!"));
            console.log(StrangeMAGENTA("Id = ", userId.uid));
            await this.logDataTofile();
            return userId.uid;
        }
        console.log(WarningYELLOW("User ID not found!"));
        await this.logDataTofile();
        return null;
    };

    private logDataTofile = async (): Promise<void> => {
        console.log(NoticeORANGE("Logging data to file..."));
        const dataWithNewLines = JSON.stringify(this.users, null, 2);
        try {
            await fs.promises.writeFile('data.json', dataWithNewLines);
            console.log(SuccessGREEN("Data logged to file successfully!"));
        } catch (error) {
            console.log(ErrorRED("Error while logging data to file!"));
            console.error(error);
        }
    }

}
// Function names from the UserDatabase class
// checkDuplicateUser
// createUser
// createGuest
// findUser
// deleteUser
// updateRegisteredUser
// updateGuestUser
// listAllUsers
// findAllUsers

export default userDatabase;