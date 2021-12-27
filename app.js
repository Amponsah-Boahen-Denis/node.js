/*class List{
    constructor(){
        this.head=head;
        this.tail=tail;
    }
append(value){
        const answers={value:value,next:null}
        if(tail){
            this.tail.next=answers
        }
        this.tail=answers
        if(!head) return this.head=answers;
    }
    toArray(){
    }
}
const EventEmitter=require('events');
const emitter= new EventEmitter();
emitter.on('message',()=>console.log('i am fired'));
emitter.on('message',()=>console.log('i am fired'));
emitter.on('message',()=>console.log('i am fired'));
emitter.emit('message');*/

//const buf=Buffer.from('hey');
//console.log(buf.toString());
//const path=require('path');
//file=path.isAbsolute('tutorial/text.json');
//console.log(file);

//const buf=Buffer.alloc(4)
//buf.write('hey')
//console.log(buf.toString())
//bug[1]//0
//consloe.log(buf.toString())

//const http=require('http');
//const fs=require('fs');
//const server=http.createServer((req,res)=>{
//const stream=fs.createReadStream('index.thml')
//stream.pipe(res)
//});


//const http=require('http');
//const data=JSON.stringify({
   // name:'john',
  //  job:'frontend developer'
//})
//request
//const req=http.request((hostname:'request in',path:'/api/users',()=>{}))


// throw new('error message')

//try{
// code lines
//} catch(){}
//doSomething()
//.then(doSomething2)
//.then(doSomething3)
//.catch(err=>console.error(err))

 const express = require('express')
 const app = express();
 const PORT=process.env.PORT || 5000;
 app.listen(PORT,()=>console.log(`we are started on port ${PORT}`))

