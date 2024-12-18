import readlineSync from 'readline-sync';
import bcrypt from "bcrypt";
import { getStartIndex, startOptions } from './util/options.js';
import { welcome, initializeNetwork } from './util/starting.js'; // Importing the new functions
// import UserDatabase from './Database/userDB.js';
import generateUID from './util/generateUID.js';
import userDatabase from './Database/userDB.js';

// const userDatabase = new UserDatabase();

async function main() {
    const uid1 = await generateUID("user", "test", "password");

    const userDb = new userDatabase();
    await userDb.createUser("test", "password", uid1, new Date(), []);
    await userDb.createUser("test", "password", uid1, new Date(), []);
    const userId = userDb.fetchUserId("test", "");
    const name = readlineSync.question("Enter your name: ");
    const password = readlineSync.question("Enter your password: ", { hideEchoBack: true });

    const newUser = await userDb.createUser(name, password, uid1, new Date(), []);
    console.log(newUser);
    // console.clear();

    // // Step 1: Welcome and Registration Flow
    // await welcome();

    // // Step 2: Network Initialization
    // await initializeNetwork();

    // // Step 3: Start the Main Menu
    // let isRunning = true;
    // while (isRunning) {
    //     const selectedOptionIndex = getStartIndex();

    //     if (selectedOptionIndex === -1) {
    //         console.log("No option selected. Exiting...");
    //         isRunning = false;
    //         return;
    //     }

    //     console.log(`You selected: ${startOptions[selectedOptionIndex]}\n`);

    //     switch (selectedOptionIndex) {
    //         case 0: // Login
    //             console.log("Login functionality coming soon!");
    //             break;

    //         case 1: // Register
    //             const username = readlineSync.question("Enter username: ");
    //             const email = readlineSync.questionEMail("Enter email: ");
    //             const password = readlineSync.question("Enter password: ", { hideEchoBack: true });
    //             const uid = Date.now().toString(); // Unique ID
    //             const dateOfJoining = new Date();
    //             userDatabase.createUser(username, email, password, uid, dateOfJoining, { ids: [] });
    //             console.log("Registration successful!\n");
    //             break;

    //         case 2: // Create Room
    //             console.log("Room creation functionality coming soon!");
    //             break;

    //         case 3: // Join Room
    //             console.log("Join room functionality coming soon!");
    //             break;

    //         case 4: // Settings
    //             console.log("Settings functionality coming soon!");
    //             break;

    //         case 5: // Help
    //             console.log("Help functionality coming soon!");
    //             break;

    //         case 6: // Exit
    //             console.log("Exiting the application. Goodbye!");
    //             isRunning = false;
    //             break;

    //         default:
    //             console.log("Invalid option. Please try again.");
    //             break;
    //     }
    // }
}

// Start the application
main();
