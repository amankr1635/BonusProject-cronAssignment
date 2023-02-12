const express = require("express");
const router = express.Router()
const cron = require('node-cron')
const moment = require('moment')


router.post('/start/:text', async function(req,res){
    try {
     let data = req.params.text
      cron.schedule('*/7 * * * * * ', function(){
          console.log(data,moment().format("YYYY-MM-DD-HH:mm:ss"))
      })
      res.status(200).send({message:"Running"})
    } catch (error) {
      res.send(error.message)
    }
 })
 
 module.exports = router