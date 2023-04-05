const express = require('express')
const app = express()
const mysql2 = require('mysql')

app.listen(3000, ()=> {
    console.log("Server running on port 3000");
});