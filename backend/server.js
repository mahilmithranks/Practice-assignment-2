const express = require("express")
const app = express()
require("dotenv").config()



app.listen(process.env.PORT,()=>{
    
    try {
        console.log("server is running")
    } catch (error) {
     console.log(error)
    }
})
