const express = require('express')
const mysql2 = require('mysql2')
const cors = require('cors')

const bcrypt = require('bcrypt')

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const saltRounds = 10

const app = express()

app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ["GET", "POST"],
    credentials: true
}))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))

//Initiate session
app.use(session({
    key: 'userID',
    secret: 'mandalorian',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24
    }
}))

//Create connection with DB
const db = mysql2.createConnection({
    user: 'root',
    host: 'localhost',
    password: '802Sonria!',
    database: 'inventory'
})


//Query for user registration
app.post('/makeIngCat', (req, res) => {
    const id = req.body.id
    const category = req.body.category
   

        // if (err) {
        //     console.log(err)
        // }
        db.query(
            "INSERT INTO categories (id, category) VALUES (?,?)", 
            [id, category],
            (err, result) => {
                console.log(err)
            }
        )   
})

app.listen (3001, () => {
    console.log('running server')
})