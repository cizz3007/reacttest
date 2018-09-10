const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();


/*devMode 개발용. productionMode: 서버 배포용*/
const severRoot = {
    devMode: 'C:/Users/user/Desktop/reacttest/dist',
    productionMode: ''
};

/*경로 설정*/
/*__dirname :C:\Users\user\Desktop\product_page\public */
app.use('/images', express.static(__dirname + '/images'));

//배포용 파일 경로
app.use('/dist', express.static(severRoot.devMode));

/*인덱스 페이지 경로*/
app.use('/', express.static(__dirname + '/views'));

/*유틸리티*/
app.use('/', express.static(__dirname));


app.use('/page2', express.static(__dirname + '/views/exam02.html'));
/*express가 지원하는 라우팅 메서드
*
* get, post, put, head,
 * delete, options,
  * trace, copy,
   * lock, mkcol,
    * move, purge,
     * propfind, proppatch,
      * unlock, report, mkactivity,
      * checkout, merge, m-search,
       * notify, subscribe,
        * unsubscribe, patch,
         * search, connect.
*
* */

const pageUrl = {
    root: __dirname + '/views'
}
//view 경로
app.get('/', function (req, res) {
    // res.sendFile('index.html',{"root":pageUrl.root});
    fs.readFile('index.html');
});
app.get('/page2', function (req, res) {
    // res.sendFile('exam02.html',{"root":pageUrl.root});
    fs.readFile('exam02.html');
});

app.get('/random.text', function (req, res) {
    res.send('random.text');
});

app.get('/ab?cd', function (req, res) {
    res.send('ab?cd');
});

app.get('/ab(cd)?e', function (req, res) {
    res.send('/ab(cd)?e');
});


app.post('/user', function (req, res) {
    console.log(req, res);
});


app.put('/user', function (req, res) {
    res.send('put!');
    console.log('put');
});

app.delete('/user', function (req, res) {
    res.send('delete!');
    console.log('delete');
});

app.all('/secret', function (req, res, next) {

    console.log('Accessing the secret section ...');
    next(); //다음 핸들러로 컨트롤을 넘긴다.
});

/*라우트 핸들러*/

app.get('/example/a', function (req, res) {
    res.send('Hello from A!');
});

app.get('/example/b', function (req, res, next) {
    console.log('the response will be sent by the next function');
    next();

}, function (req, res) {
    res.send('Hello from B!');
});


app.get('/static', function (req, res) {
    console.log('!!');
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>새로고침 없이 이동</h1>');
    res.end();

    // fs.readFile('/static/3670552.jpg', function(error, data){
    //     console.log(data);
    // });

});

app.route('/book')
    .get(function (req, res) {
        res.send('Get a random book');
    })
    .post(function (req, res) {
        res.send('add a book');
    })
    .put(function (req, res) {
        res.send('Update the book');
    });

app.listen(7777, function (req, res) {

    console.log('서버 시작');
});





















