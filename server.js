var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleone={
    title:'Article one | Mukul ',
    heading:'Article One',
    date: 'Aug 15,2017',
    content:  `   <p>
                This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.
               </p>
               <p>
                This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.
               </p> 
               <p>
                This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.
               </p> 
               <p>
                This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.
              </p>`
    
    
    
};

function createTemplate(data){
    
    var title = data.title;
    var heading= data.heading;
    var date= data.date;
    var content= data.content;
    var htmlTemplate =
    `<html>
        <head>
            <title>
            ${title}
            </title>
             <meta name="viewport" content="width=device-width, initial scale=1"/>
             
            </head>
             <body>
             <div class= "container">
            <div>
            <a href= "/"> Home</a>
            </div>
             <hr/>
             <h>
             ${heading}
            </h>
            <div>
             ${date}
            </div>
            <div>
               <p>
               ${content}
               </p>
            </div>
            </div>
         </body>
   </html>`;
   return htmlTemplate;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
 res.send(createTemplate(articleone));
});

var counter= 0;
app.get('/counter', function (req,res){
    counter = counter + 1;
    res.send(counter.toString());
});

app.get('/article-two', function (req, res) {
    res.send('Article two reqsted and will be served here.');
});

app.get('/article-three', function (req, res) {
    res.send('Article three requested and will be served here.');
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
