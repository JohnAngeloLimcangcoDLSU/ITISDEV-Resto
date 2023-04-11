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


app.post('/makeIngCat', (req, res) => {
    
    const category = req.body.category
   

        // if (err) {
        //     console.log(err)
        // }
        db.query(
            "INSERT INTO categories (category) VALUES (?)", 
            [category],
            (err, result) => {
                console.log(err)
            }
        )   
})


app.post('/makeUnits', (req, res) => {
    // const id = req.body.id
    const unit = req.body.unit
    const unit_name = req.body.unit_name

        // if (err) {
        //     console.log(err)
        // }
        db.query(
            "INSERT INTO units (unit, unit_name) VALUES (?,?)", 
            [unit, unit_name],
            (err, result) => {
                console.log(err)
            }
        )   
})

app.get('/getCategory', (req, res) => {
    const category = req.body.category

        // if (err) {
        //     console.log(err)
        // }
        db.query(
            "SELECT category FROM categories;" ,
            (err, result) => {
                console.log(err)
                console.log(result)
            }
            
        )   
})

app.listen (3001, () => {
    console.log('running server')
})