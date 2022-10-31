const express = require("express");
const app = express();


//O parâmetro req é um objeto que o servidor recebe através de alguma requisição feita no frontend.
//O parâmetro res também é um objeto, mas neste caso é o servidor quem o envia em forma de resposta para o frontend.

app.get("/", (req, res) => {
    //__dirname retorna o diretório absoluto da aplicação, ex.: /home/valerio/Desktop/NODEjs/Express/app.js
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/html/about.html");
});

app.get("/blog", (req, res) => {
    res.send("Bem-vindo ao meu blog");
});

app.get("/css/style.css", (req, res) => {
    res.sendFile(__dirname + "/css/style.css");
});

//passando parâmetros para rota
app.get("/ola/:cargo/:nome", (req, res) => {
    res.send("<h1>Olá " + req.params.nome + "</h1>"
    + "<h2>Seu cargo é: " + req.params.cargo + "</h2>");
});






app.listen(8081, () => {
    console.log("Server running in http://localhost/8081")
});

//Uma função de callback é uma função que é sempre executada quando um evento acontece
