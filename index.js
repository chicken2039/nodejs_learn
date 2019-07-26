var express = require('express');
var app = express();
var morgan = require('morgan')
var users = [
    {id:1, name : 'alice'},
    {id:2, name : 'bek sundae'},
    {id:3, name : 'kurisu'}
];

app.use(morgan('dev'));
app.get('/users',function(req,res){
    res.json(users)
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});



/*
import express from 'express';
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
*/
/*const express = require('express');
const app = express();

 function commonmw(req,res,next){
     console.log('COMMON MIDDLE WARE');
     next(new Error('error ouccered'));

 }
 function errormw(err,req,res,next){
     console.log(err.message);
     next();
 }

 
 app.use(commonmw);
 app.use(errormw);
 
 app.listen(3000,function(){
     console.log('Server is running');
 })
*/

/*
const http = require('http'); //모듈 가져옴

const hostname = '127.0.0.1'; // 호스트
const port = 3000; //포트

const server = http.createServer((req, res) => {

    if (req.url === '/') {

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World!\n');
    } else {
        res.statusCode = 404;
        res.end('Not Found');

    }
});//클라이언트가 접속 했을 때 동작 - 콜백함수 

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); */


/* const fs = require('fs');
const data = fs.readFile('./data.txt', 'utf8', function (err, data) { console.log(data) });
console.log(data);
 */

/* const math = require('./math.js');

const result = math.sum(2, 3);
console.log(result); */