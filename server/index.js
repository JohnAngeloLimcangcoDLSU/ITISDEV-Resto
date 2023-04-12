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
    database: 'Inventory'
})

//Query for user registration
app.post('/register', (req, res) => {

    const username = req.body.username
    const password = req.body.password
    const firstname = req.body.firstname
    const lastname = req.body.lastname

//Password hashing
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err)
        }
        db.query(
            "INSERT INTO users (username, password, first_name, last_name) VALUES (?,?,?,?)", 
            [username, hash, firstname, lastname],
            (err, result) => {
                console.log(err)
            }
        )
    })    
})

//Setting session for currently logged in user
app.get('/login', (req, res) => {
    if (req.session.user) {
        res.send({loggedIn: true, user: req.session.user})
    }
    else {
        res.send({loggedIn: false})
    }
})

//Query for logging in user
app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    db.query(
        'SELECT * FROM users WHERE username = ?;',
        username,
        (err, result) => {

            if (err) {
                res.send({err: err})
            }
            else {
                if (result.length > 0) {
                    bcrypt.compare(password, result[0].password, (error, response) => {
                        if (response){
                            req.session.user = result
                            console.log(req.session.user)
                            res.send(result)
                        }
                        else {
                            res.send({ message: 'Incorrect username/password'})
                        }
                    })
                }
                else {
                    res.send({message: 'User does not exist'})
                }
            }
        }
    )
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
                console.log(result)
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
                console.log(result)
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