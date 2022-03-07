const _PORT = 3000
const cors   = require('cors')
const log     = require('morgan')
const server = require('./api/api')
const express = require('express')
const app     = express()

app.use(log('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(process.env.PORT || _PORT,()=>{
    console.log(`Online into port: ${_PORT}`)
})

app.use((req,res,next) =>{
    res.header('Accesss-Control-Allow-Origin','https://app-cors-policy-app.herokuapp.com/')
    res.header('Accesss-Control-Allow-Methods','GET,POST,PUT,DELETE')
    app.use(cors())
    next()
})

app.use('/',server)

