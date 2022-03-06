const db      = require('../db/db')
const express = require('express')

const server  = express.Router()

server.route('/').get((req,res)=>{
    db.select(['job','jobdesc'])
      .from('paper')
      .then(response => res.status(200).send(response))
      .catch(err => res.status(500).send(err)) 
}).post((req, res)=>{
    user = { ...req.body }

    let data = {
        job: user.job,
        jobdesc: user.jobdesc
    }

    db.insert(data)
      .from('paper')
      .then(_ => res.status(201).send(_))
      .catch(err => res.status(400).send(err)) 
})

module.exports = server