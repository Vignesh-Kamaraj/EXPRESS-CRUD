const express = require('express') //commonJS Import older version
// import express from 'express'//ES Module Import add "type": "module" in package.json
const dotenv=require('dotenv')
const cors= require('cors')
dotenv.config()
const PORT =process.env.PORT
const AppRoutes = require('./src/routes')
const app = express()
app.use(cors())
app.use(express.json())

app.use('/',AppRoutes)


app.listen(PORT,()=>console.log(`Server listening to port${PORT}`))

// npm init
// npm i express
// "start": "node index.js",