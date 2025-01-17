// File: /d:/Projects/WhisperNet/src/pages/menuSequence.ts

import readlineSync from 'readline-sync';
import { startOptions } from '../util/options.js';
import { cyan, ErrorRED, WarningYELLOW } from '../util/colours.js';
import userDatabase from '../Database/userDB.js';
import { comparePassword } from '../Auth/authOps.js';

export default function enter(): void {
    console.log("You are now entering the WhisperNet...");
    const index = readlineSync.keyInSelect(startOptions, "What would you like to do? (enter the option number)");
    // const username = readlineSync.question("Enter your username :");
    // console.log(`Welcome, ${username}!`);
    if (index === -1) {
        console.log(ErrorRED("Exiting WhisperNet..."));
        process.exit(0);
    }
    else if (index === 0) {
        console.log("You are now logging in...");
    }
};