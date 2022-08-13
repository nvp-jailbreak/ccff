const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ ❕ ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ ❕ ] » ') + data);
			break;
		default:
			console.log(chalk.red(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.rgb(223, 115, 255)('─💸NVP💗─ ▷') + data);
			break;
		case "error":
			console.log(chalk.rgb(127, 255, 0)('─🐉NVP🐍─ ▷ ') + data);
			break;
		default:
			console.log(chalk.rgb(255, 192, 203)(`─💸NVP🐍─ ▷`) + data);
			break;
	}
}
