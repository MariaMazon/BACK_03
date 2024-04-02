// criando um servidor web usando node
const http=require('http');

const server=http.createServer((req,res)=>{
    console.log("Efetuado o pedido");
    res.setHeader('Content-type','text/html');
    res.write("<h1>Pedido aceito 1 </h1>");
    res.write("<h2>Pedido aceito 2 </h2>");
    res.write("<h3>Pedido aceito 3 </h3>");
    res.end();
})
server.listen(3000,'localhost',()=>{
    console.log("Servidor iniciado")
   
;})