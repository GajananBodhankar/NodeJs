import chalk from "chalk";
import validator from "validator";
const res = validator.isEmail("gajanan@gmail.com");
console.log(res);
console.log(chalk.red.inverse('hi'))