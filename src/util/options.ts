import readlineSync from 'readline-sync';
export const startOptions = [
    "Login",
    "Register",
    "Create Room",
    "Join Room",
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
