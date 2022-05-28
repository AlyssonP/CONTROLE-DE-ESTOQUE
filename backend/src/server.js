import { openDb } from './configDB.js'
//import { createTable, insertProduto, updateProduto, selectProdutos, selectProduto, deleteProduto } from './Controller/produto.js'

import { createTable } from "./Controller/estoque.js"
createTable()

import express from "express"
import fs from "fs"
import https from "https"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())

import router from "./routes.js"
app.use(router)

app.listen(3333, () => console.log('Server is running'))

https.createServer({
    cert: fs.readFileSync("src/SSL/code.crt"),
    key: fs.readFileSync("src/SSL/code.key")
}, app).listen(3331, () => console.log('Server is running https'))