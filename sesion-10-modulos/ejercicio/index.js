import {suma, multiplica} from './controller.js';
import chalk from 'chalk';

const sumar = suma(1, 2);
console.log(sumar);

const multi = multiplica (4, 5);
console.log(chalk.green(multi));