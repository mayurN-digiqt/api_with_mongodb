const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=>{
     res.setHeader("Content-type","text/html")
     console.log(req.url,req.method)
     let path = "./view/";
     switch(req.url){
        case '/':
            console.log("index")
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            console.log("about")
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            res.statusCode = 301;    
            res.setHeader('Location',"/about")
            res.end()
            break;
        default :
            console.log("404")
            path += '404.html';
            res.statusCode = 404;
            break;
     }
     fs.readFile(path,(err,data)=>{
       
        if (err){
            console.log(err)
            res.end()
        }else{
            res.end(data)
        }
    })
})
server.listen(8080,'localhost',()=>{
    console.log("server is listen")
})

