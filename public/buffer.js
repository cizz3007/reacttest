const buf1 = Buffer.alloc(10);
const buf2= Buffer.alloc(10,1);
const buf3 = Buffer.allocUnsafe(15);
buf3.write('ppp');
const buf4 = Buffer.from([1,2,3]);

const buf5 = Buffer.from('test');

const buf6 = Buffer.from('test','latin1');

console.log(`buf4는 ${buf4[1]}`);

const buf = Buffer.from('hello world', 'ascii');

console.log(buf.toString('hex'));

console.log(buf.toString('base64'));
console.log(buf.toString('utf8'));

