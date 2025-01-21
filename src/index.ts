// File: /D:/Projects/WhisperNet/src/index.ts
import userDatabase from './Database/userDB.js';
import { welcome } from './pages/starting.js';
import enter from './pages/menuSequence.js';
import AuthCreds from './Auth/auth.js';

// const userDatabase = new UserDatabase();
export const authCredInfo = new AuthCreds();

async function main() {
    const userDb = new userDatabase();
    const user1 = await userDb.createUser("admin", "admin", new Date(), []);
    const user2 = await userDb.createUser("user", "user", new Date("22-12-2024"), []);
    const user3 = await userDb.createUser("test", "test", new Date("23-12-2024"), []);
    welcome();
    await enter(authCredInfo);
}
// Start the application
main();