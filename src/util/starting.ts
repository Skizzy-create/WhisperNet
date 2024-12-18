import ora from 'ora';
import readlineSync from 'readline-sync';
import { DebugCYAN, InfoBLUE, NoticeORANGE, SuccessGREEN, WarningYELLOW } from './colours.js';
// import UserDatabase from '../Database/userDB.js';

// Create an instance of the UserDatabase
// const userDB = new UserDatabase();

export async function welcome(): Promise<void> {
    console.log(DebugCYAN(
        `◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤`
    ));
    console.log(SuccessGREEN(
        `    _    _ _     _                     _   _      _   
   | |  | | |   (_)                   | \\ | |    | |  
   | |  | | |__  _ ___ _ __   ___ _ __|  \\| | ___| |_ 
   | |/\\| | '_ \\| / __| '_ \\ / _ \\ '__| . \ |/ _ \\ __|
   \\  /\\  / | | | \\__ \\ |_) |  __/ |  | |\\  |  __/ |_ 
    \\/  \\/|_| |_|_|___/ .__/ \\___|_|  |_| \\_|\\___|\\__|
                       | |                              
                       |_|                              `
    ));
    console.log(DebugCYAN(
        `◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤`
    ));
    console.log(InfoBLUE("Welcome to WhisperNet!"));

    // Ask the user for their name
    const userName = readlineSync.question(NoticeORANGE('Enter your name: '));

    // Ask if the user wants to register
    const wantsToRegister = readlineSync.keyInYNStrict(NoticeORANGE('Do you want to register? '));

    if (wantsToRegister) {
        // Registration process
        const email = readlineSync.question(NoticeORANGE('Enter your email: '));
        const password = readlineSync.question(NoticeORANGE('Enter your password: '), {
            hideEchoBack: true
        });
        const uid = `UID-${Math.random().toString(36).substr(2, 9)}`;
        const dateOfJoining = new Date();
        // userDB.createUser(userName, email, password, uid, dateOfJoining, { ids: [] });
    } else {
        // Handle guest users
        const uid = `GUEST-${Math.random().toString(36).substr(2, 9)}`;
        // userDB.createGuest(userName, uid);
    }

    console.log(SuccessGREEN(`Hello, ${userName}! Welcome aboard!`));
}

export async function initializeNetwork(): Promise<void> {
    let spinner = ora(DebugCYAN("Shadow Protocol Initializing")).start();
    setTimeout(() => {
        spinner.color = 'blue';
        spinner.text = InfoBLUE('Initiating Shadow Protocol...');
    }, 1000);
    setTimeout(() => {
        spinner.succeed(SuccessGREEN("Shadow Protocol Initialized"));
    }, 2000);

    console.log(SuccessGREEN("// Encrypting transmissions..."));
    console.log(WarningYELLOW("// Ghost Protocol Enabled"));
    console.log(DebugCYAN("// Stealth Mode Activated"));
    console.log(InfoBLUE("// Network status: ACTIVE"));
}
