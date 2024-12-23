// /d:/Projects/WhisperNet/src/util/options.ts

import readlineSync from 'readline-sync';
export const startOptions = [
    "Login",
    "Register",
    "Settings",
    "Help",
    "Exit"
];
export function getStartIndex() {
    console.log("Welcome to the WhisperNet");
    const startIndex = readlineSync.keyInSelect(startOptions, "Select what you would like to do");
    console.log(startIndex);
    return startIndex;
}
