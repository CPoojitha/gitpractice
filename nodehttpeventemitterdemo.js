const http=require('http').createServer()
const fs=require('fs')
http.on('request',(req,res)=>{
    switch(req.url){
        case'/products':
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify({id:1,'name':'Iphone'}))
        break
        case'/google':
        case'/about':
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(fs.readFileSync(`./mods/${req.url}.html`))
        break;
        case'/':
        res.writeHead(301,{'Location':'http://google.com'})
        res.end()
        break;
      default:
          res.writeHead(404,{'Content-Type':'text/html'})
          res.end('<h3>Page Not Found</h3>')
          break;
    }

    })
    http.listen(8089,'Localhost',()=>console.log('server started'));