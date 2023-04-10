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
app.post('/register', (req, res) => {

    const category_id = req.body.category_id

        if (err) {
            console.log(err)
        }
        db.query(
            "INSERT INTO inventory (category_id) VALUES (?)", 
            [category_id],
            (err, result) => {
                console.log(err)
            }
        )   
})

app.listen (3306, () => {
    console.log('running server')
})