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
    password: 'rusherdragger',
    database: 'Inventory'
})

//Query for user registration
app.post('/register', (req, res) => {

    const username = req.body.username
    const password = req.body.password
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const active = 0
    const role_id = req.body.role

//Password hashing
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err)
        }
        db.query(
            "INSERT INTO users (username, password, first_name, last_name, created, active, role_id) VALUES (?,?,?,?, NOW(),?,?)", 
            [username, hash, firstname, lastname, active, role_id],
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

//Get roles table
app.get('/roles', (req, res) => {
    db.query(
        'SELECT * FROM roles;',
        (err, result) => {
            if (err){
                console.log(err)
            }
            else {
                console.log(result)
                res.send(result)
            }
        }
    )
})

//Get users table
app.get('/getusers', (req, res) => {
    db.query(
        'SELECT * FROM users;',
        (err, result) => {
            if (err){
                console.log(err)
            }
            else {
                console.log(result)
                res.send(result)
            }
        }
    )
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

app.listen (3001, () => {
    console.log('running server')
})