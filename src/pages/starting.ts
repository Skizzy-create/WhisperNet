// File: /d:/Projects/WhisperNet/src/pages/starting.ts

import ora from 'ora';
import readlineSync from 'readline-sync';
import { ErrorRED, SuccessGREEN, WarningYELLOW } from '../util/colours.js';
// import UserDatabase from '../Database/userDB.js';

// Create an instance of the UserDatabase
// const userDB = new UserDatabase();

export async function welcome(): Promise<void> {
    console.log("══════════════════════════════════════════════════════════");
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
    console.log("══════════════════════════════════════════════════════════");
    console.log("Welcome to WhisperNet!");
};

export async function initializeNetwork(): Promise<void> {
    let spinner = ora("Shadow Protocol Initializing").start();
    setTimeout(() => {
        spinner.text = 'Initiating Shadow Protocol...';
    }, 1000);
    setTimeout(() => {
        spinner.succeed(SuccessGREEN("Shadow Protocol Initialized"));
    }, 2000);

    console.log(SuccessGREEN("// Encrypting transmissions..."));
    console.log(WarningYELLOW("// Ghost Protocol Enabled"));
    console.log("// Stealth Mode Activated");
    console.log("// Network status: ACTIVE");
}
