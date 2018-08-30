const path =require('path');
const fs = require('fs');



/*버퍼는 데이터입출력 등 바이너리데이터를 다룬다.*/
fs.writeFile('./output.txt','써짐아주 잘 써짐', function(){
    console.log('작성 완료');
});


fs.readFile('./output.txt',function (fd, data) {

    let buffer = new Buffer(data);
    let result = buffer.toString('utf8');
    console.log(result);
});


let buffer1 = new Buffer('this is the content of my buffer');
let buffer2= new Buffer(16);

let targetStart = 4;
let sourceStart = 8;
let sourceEnd = 19;
buffer1.copy(buffer2, targetStart, sourceStart, sourceEnd);
console.log(buffer2.toString());



















