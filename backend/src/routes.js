import { Router } from "express";
import {insertProduto, updateProduto, selectProdutos, selectProduto, deleteProduto } from './Controller/produto.js'
import { selectEstoque, selectEstoques, insertEstoque, updateEstoque, deleteEstoque } from "./Controller/estoque.js"

const router = Router()

router.get("/produtos", selectProdutos)
    .get("/produto", selectProduto)
    .post("/produto", insertProduto)
    .put("/produto", updateProduto)
    .delete("/produto", deleteProduto)

router.get("/estoques", selectEstoques)
    .get("/estoque", selectEstoque)
    .post("/estoque", insertEstoque)
    .put("/estoque", updateEstoque)
    .delete("/estoque", deleteEstoque)

export default router