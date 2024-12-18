import chalk from "chalk";

const ErrorRED = chalk.red; // For fatal errors
const WarningYELLOW = chalk.yellow; // For warning messages
const InfoBLUE = chalk.blue; // For informational messages
const SuccessGREEN = chalk.green; // For success messages
const DebugCYAN = chalk.cyan; // For debugging messages
const NoticeORANGE = chalk.hex('#FFA500'); // For notices or important messages
const StrangeMAGENTA = chalk.magenta; // For unusual or unexpected situations

export {
    ErrorRED,
    WarningYELLOW,
    NoticeORANGE,
    SuccessGREEN,
    InfoBLUE,
    DebugCYAN,
    StrangeMAGENTA
}