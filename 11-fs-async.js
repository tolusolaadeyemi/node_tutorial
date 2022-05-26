//nodejs built in modules: fs (filesystem)

//asynchronous (non-blocking) approach : with this approach we need to provide a callback function (a function that is run whenever whatever functionality we are implementing is complete e.g AddEventListener )
// async approach means the moment the task is started it is offloaded and the code continues to run (useful when multiple users are using your app)
//alternative to using callbacks is using promises or AsyncAwait, as callbacks can get messy fast.

const {readFile, writeFile} = require('fs');

console.log('start')
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt',`Here is the result: ${first}, ${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('done with this task')
        })
    })
})
console.log('starting next task')
//result will be undefined that's fine