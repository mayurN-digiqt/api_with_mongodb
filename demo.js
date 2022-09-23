// const os = require('os')
// console.log(os,"Okay.")
// console.log(os.platform(),"Okay.")
// console.log(os.homedir(),"Okay.")

var fs = require('fs')
const readStream = fs.createReadStream('demo.txt',{encoding: 'utf8'})
const writeStream = fs.createWriteStream('demo2.txt');
// readStream.on('data',(chunk)=>{
//     console.log('---- New Chunk ----')
//     console.log(chunk)
//     writeStream.write("\nNEW DATA\n")
//     writeStream.write(chunk)
// })
// readStream.pipe(writeStream)