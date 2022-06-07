import { Router } from "express";
import { inserirvilao, achartodos} from "../repository/repository.js"; 

const server = Router();


server.get('/vilao/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const busca = await buscarvilao(id);

        resp.send({
            vilao:busca
        })
    } 
    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
});

server.post('/vilao', async (req, resp) => {
    try {
    const nome = req.body;
    const y = await inserirvilao(nome);

        resp.send(
            y
        )
    } 
    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
});

server.get('/vilao/', async (req, resp) => {
    try {
        const busca = await achartodos();
        
        resp.send({
            vilao:busca
        })
    } 
    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
});


export default server;