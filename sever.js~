const http=require('node:http');
const port=8000;
const html=require('fs').readFileSync('index.html');

const server = http.createServer((req,res)=>{
	res.statusCode=200;
	res.setHeader('Content-Type','text/html;charset=UTF-8');
	res.end(html);
});

server.listen(port, ()=>{
	console.log(`Server running at Port:${port}`);
});
