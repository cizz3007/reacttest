const mongoose = require('mongoose');


// mongoose.connect('mongodb://localhost:27017/testDB');
//
// var db = mongoose.connection;
//
// /*연결 실패*/
// db.on('error', function(){
//     console.log('연결 실패');
// });
//
// /*연결 성공*/
// db.once('open', function(){
//     console.log('연결 성공');
// });
//
// /*스키마 생성*/
// let student = mongoose.Schema({
//     name:'string',
//     address:'string',
//     age:'number'
// });
//
// let Student = mongoose.model('Schema', student);
//
// /*student객체를 new로 생성해서 값을 입력*/
// let newStudent = new Student({name:'홍길동',address:'서울시 강낙무 논현동',age:22});
//
// /*데이터 저장*/
// newStudent.save(function(error, data){
//     if(error){
//         console.log(error)
//     } else{
//         console.log('저장되었습니다.');
//     }
// });


