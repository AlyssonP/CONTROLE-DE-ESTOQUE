import { openDb } from "../configDB.js";

export async function createTable(){
    openDb().then(db => {
        db.exec("CREATE TABLE IF NOT EXISTS Estoque (id integer primary key AUTOINCREMENT, id_produto integer, qtd integer, FOREIGN KEY(id_produto) REFERENCES produto(id))")
    })
}

export async function selectEstoques(req, res){
    openDb().then(db => {
        db.all("SELECT id, id_produto, qtd FROM estoque")
        .then(estoques => res.json(estoques))
    })
}

export async function selectEstoque(req, res){
    const id = req.body.id
    openDb().then(db => {
        db.get("SELECT id, id_produto, qtd FROM estoque WHERE id=?", [id])
        .then(estoque => res.json(estoque))
    })
}

export async function insertEstoque(req, res){
    const estoque = req.body
    openDb().then(db => {
        db.run("INSERT INTO produto(id_produto, qtd) VALUES (?, ?)", [estoque.id_produto, estoque.qtd])
    })
    res.json({
        "statusCode": 200
    })
}

export async function updateEstoque(req, res){
    const estoque = req.body
    openDb().then(db => {
        db.run("UPDATE produto SET qtd=? WHERE id=? ", [estoque.qtd, estoque.id])
    })
    res.json({
        "statusCode": 200
    })
}

export async function deleteEstoque(req, res){
    const id = req.body.id
    openDb().then(db => {
        db.get("DELETE FROM estoque WHERE id=?", [id])
        .then(res=>res)
    })
    res.json({
        "statusCode": 200
    })
}
