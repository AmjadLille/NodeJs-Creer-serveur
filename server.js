const http = require('http');
const url = require('url');


const server = http.createServer((request, response)=>{
    response.writeHead(200, { 'Content-type': 'text/html'});

let path = url.parse(request.url , true).query;
if (path.name && path.city){
    response.end(`Hello, ${path.name} from ${path.city}`);
} else {
    response.end('Please provide name AND city parameters');
}
    
});

server.listen(8000, '127.0.0.1', () =>{
    console.log('listening for requests now');
});
