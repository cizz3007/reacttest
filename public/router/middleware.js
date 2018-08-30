const express = require('express');
const app =express();

app.use(function(req, res, next){
    console.log('Time:', Date.now());
    next();
});

app.use('/user/id:',function(req, res, next){
    console.log('절차 1');
    console.log('요청 타입', req.method);
    next();
});

app.get('/user/id:', function(req, res, next){
    console.log('절차 2');
    res.send('USER');
});

app.use('/user/pw:', function(req, res, next){
    console.log('요청 타입은 ?', req.method);
    next();
    /*app.get에 같은 주소를 쓰는 곳으로 넘겨준다.*/
});

app.get('/user/pw:', function(req, res, next){
    res.send('password');
    console.log('미들웨어와 라우터//');
});

app.listen(3000, function (req, res) {
    console.log('서버 시작');
});



