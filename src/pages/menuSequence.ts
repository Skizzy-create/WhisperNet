// File: /d:/Projects/WhisperNet/src/pages/menuSequence.ts

import readlineSync from 'readline-sync';
import { startOptions } from '../util/options.js';
import { cyan, ErrorRED, WarningYELLOW } from '../util/colours.js';
import userDatabase from '../Database/userDB.js';
import { comparePassword } from '../Auth/authOps.js';

export default async function enter(userDatabase: userDatabase): Promise<void> {
    console.log("You are now entering the WhisperNet...");
    const username = readlineSync.question("Enter your username :");
    console.log(`Welcome, ${username}!`);
    const index = readlineSync.keyInSelect(startOptions, "What would you like to do? (enter the option number)");
    // handle different options
    switch (index) {
        case 0:
            // looking for user in the database
            const userExists = userDatabase.findOne({ username: username }, true);
            if (userExists === null) {
                console.log(ErrorRED("User does not exist!"));
                return;
            };
            // check for password
            if (userExists.password === undefined) {
                console.log(ErrorRED("User does not have a password!"));
                console.log(WarningYELLOW("Please register first! / Create new account"));
                return;
            }
            const password = readlineSync.question(cyan("Enter the password :"), { hideEchoBack: true });
            const isValid = await comparePassword(password, userExists.password);
            if (isValid) {
                console.log("Login successful!");
            };
    };
};