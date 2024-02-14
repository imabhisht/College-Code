const fs = require("fs");
console.log("This will create a file");

function fun(str){
    console.log(str)
}

function fun2(fun, str){
    fun(str)
}

fun2(fun, "Hello World")




function fun3(myfun, str){
    myfun(str)
}

fun3(function(str){
    console.log(str)
}, "Hello World 2")





const http = require('http');


http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello World</h1>');
}).listen(3000, () => console.log('Server running http://localhost:8090'));



fs.rename("aaa.txt", "bbb.txt", function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("File renamed");
    }
});

console.log("You can see the next message in 6 seconds")
var EventEmitter = require(&#039;events&#039;) 
// 
import event module var eventObj = new EventEmitter(); // create an event object eventObj.on(&#039;delay Event&#039;, function() { // bind event to callback console.log(&quot;The event delays 6000 milliseconds&#039;);
});
setTimeout(function() { // this is a delay function
eventObj.emit(&#039;delayEvent&#039;);
}, 6000); // 6000 milliseconds
// trigger an event



