const express=require('express')
const app=express()
const msg=require('./Routes')
const bodyparser=require('body-parser')
const Dbconnection=require('./Dbconnection')
const cors=require('cors')
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))


// app.use(bodyparser.json())
app.use('/',msg)

app.listen(3005,()=>{
  console.log("Server Lisentening to port 3005");
})
