import { DebugCYAN, InfoBLUE, NoticeORANGE, SuccessGREEN, WarningYELLOW } from "../util/colours.js";

// Interface for guest users
interface GuestUser {
    username: string;
    uid: string;
    dateOfJoining: Date;
    RoomId?: { ids: string[] };
    socketId?: string;
    socketHistory?: string[];
    password?: string;
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
