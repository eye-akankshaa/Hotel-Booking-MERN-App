const mongoose = require('mongoose')

const mongoUrl ="url--";

  mongoose.connect(mongoUrl , {useUnifiedTopology:true, useNewUrlParser:true})


  var connection = mongoose.connection

  connection.on('error', ()=>{
      console.log("cannot connect to MongoDB")
  })

  connection.on('connected', ()=>{
      console.log('Connetion to MongoDB successful')
  })

  module.exports=mongoose