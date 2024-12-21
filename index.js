require('dotenv').config()
const express=require("express")
const app=express()
const port=300

app.get("/", (req,res)=>{
    res.send("<h1>hello world!!222</h1>")
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})