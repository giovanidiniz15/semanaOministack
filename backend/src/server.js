const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://testebd:testebd@testebd-2kkmt.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


//GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros)
// req.params - Acessar route params (para edicao, delete)
// req.body = Acessar corpo da requisição (para criação, edicao)

app.use(express.json());
app.use(routes);


app.listen(3333);