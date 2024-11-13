const express = require('express');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(cors({
    origin: '*'
  }));

const cursos = ['FullStack Master', 'Desenvolvimento de Games', 'Viver de Código', 'Golang do zero ao avançado'];

server.get('/cursos/:index', (req, res) => {
    const {index} = req.params

    return res.json(cursos[index])
});

server.get('/cursos', (req, res) => {
    return res.json(cursos)
});

server.post('/cursos', (req, res) => {
    const {name} = req.body
    cursos.push(name);
    
    return res.json(cursos)
});

server.put('/cursos/:index', (req, res) => {
    const {index} = req.params;
    const {name} = req.body;

    cursos[index] = name;

    return res.json(cursos)

});

server.delete('/cursos/:index', (req, res) => {
    const {index} = req.params;
    cursos.splice(index, 1);
    return res.json({ message: "o curso foi deletado"})
});

const setup = () => {
    server.listen(3000);
    console.log('App run')
}

setup();