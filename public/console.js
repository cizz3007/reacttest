const fs = require('fs');
const { Console } = require('console');


/*


function getStreamSomehow(){
    const output = fs.createWriteStream('./stdout.log');
    return output;
}

const name = 'HEX DU';
console.warn(`경고! ${name}!`);
console.error(new Error('우아! 에러가 발생했어요!'));

const out = getStreamSomehow();
const err = getStreamSomehow();
const myConsole = new console.Console(out, err);

myConsole.log('hello world');

myConsole.log('hello %s', 'world');

myConsole.error(new Error('우아! 에러가 발생했습니다'));
const newname = 'Will Robinson';

myConsole.warn(`경고 : ${newname}`);



*/

const output = fs.createWriteStream('./error.log');
const errorOutput = fs.createWriteStream('./stderr.log');

const logger = new Console(output, errorOutput);
const count = 5;
logger.log('count : %d', count);