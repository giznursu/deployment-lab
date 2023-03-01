const express = require("express")
const app = express()
const path = require("path")
app.use(express.json())


app.use(express.static(`${__dirname}/public`))





app.listen(4000, ()=> console.log("server running on 4000"))

app.get("/",(req,res)=>{
    res.sendStatus(200).sendFile(path.join(__dirname, '../public/index.html'))
})