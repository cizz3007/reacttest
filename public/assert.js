/*유닛 테스트를 위한 node.js의 테스트 모듈*/
const assert = require('assert');

const obj1 = {
    a:{
        b:1
    }
};

const obj2 = {
    a:{
        b:2
    }
};

const obj3 = {
    a:{
        b:1
    }
};

const obj4 = Object.create(obj1);

assert.deepEqual(obj1, obj1);
assert.deepEqual(obj1, obj3);
assert.deepEqual(obj1,obj4);