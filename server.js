const http=require('http')

const server=http.createServer((req, res)=>{
    console.log("Vivek")
})

server.listen(4000)