import { openDb } from "../configDB.js";

export async function createTable(){
    openDb().then(db => {
        db.exec("CREATE TABLE IF NOT EXISTS Produto (id integer primary key AUTOINCREMENT, nome varchar(200), preco real)")
    })
}

export async function selectProdutos(req, res){
    openDb().then(db => {
        db.all("SELECT id, nome, preco FROM produto")
        .then(produtos => res.json(produtos))
    })
}

export async function selectProduto(req, res){
    const id = req.body.id
    openDb().then(db => {
        db.get("SELECT id, nome, preco FROM produto WHERE id=?", [id])
        .then(produto => res.json(produto))
    })
}

export async function insertProduto(req, res){
    const produto = req.body
    openDb().then(db => {
        db.run("INSERT INTO produto(nome, preco) VALUES (?, ?)", [produto.nome, produto.preco])
    })
    res.json({
        "statusCode": 200
    })
}

export async function updateProduto(req, res){
    const produto = req.body
    openDb().then(db => {
        db.run("UPDATE produto SET nome=?, preco=? WHERE id=? ", [produto.nome, produto.preco, produto.id])
    })
    res.json({
        "statusCode": 200
    })
}

export async function deleteProduto(req, res){
    const id = req.body.id
    openDb().then(db => {
        db.get("DELETE FROM produto WHERE id=?", [id])
        .then(res=>res)
    })
    res.json({
        "statusCode": 200
    })
}