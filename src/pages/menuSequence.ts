// File: /d:/Projects/WhisperNet/src/pages/menuSequence.ts

import readlineSync from 'readline-sync';
import { startOptions } from '../util/options.js';
import { cyan, ErrorRED, WarningYELLOW } from '../util/colours.js';
import userDatabase from '../Database/userDB.js';
import { comparePassword } from '../Auth/authOps.js';
import axios from 'axios';
import AuthCreds from '../Auth/auth.js';


export default async function enter(AuthDB: AuthCreds): Promise<void> {
    console.log("You are now entering the WhisperNet...");
    const index = readlineSync.keyInSelect(startOptions, "What would you like to do? (enter the option number)");
    if (index == 0) {
        console.log(cyan("You are now logging in..."));
        const username = readlineSync.question("Enter your username: ");
        const password = readlineSync.question("Enter your password: ", {
            hideEchoBack: true,
        });

        const response = await axios.post("https://whispernetdb.onrender.com/api/v1/user/login", {
            username: username,
            password: password
        });
        if (response.data.error) {
            console.log(ErrorRED(response.data.error));
            return;
        }
        if (!response.data.Token) {
            console.log(WarningYELLOW("Invalid credentials!"));
            return;
        };
        AuthDB.setUserID(response.data.uid);
        AuthDB.setJWTToken(response.data.Token);
        console.log("Login successful!");
        return;
    }
    else if (index == 1) {
        console.log(cyan("You are now registering..."));
        const registerName = readlineSync.question("Enter your username: ");
        const registerPassword = readlineSync.question("Enter your password: ", {
            hideEchoBack: true,
        });
        const registerDate = new Date();
        const RoomId = "";

        const response = await axios.post("https://whispernetdb.onrender.com/api/v1/user/register", {
            username: registerName,
            password: registerPassword,
            dateOfJoining: registerDate,
            RoomId: RoomId
        });
        if (response.data.error) {
            console.log(ErrorRED(response.data.error));
            return;
        }
        AuthDB.setUserID(response.data.user.uid);
        AuthDB.setJWTToken(response.data.Token);

        console.log("Registration successful!");
    }
};