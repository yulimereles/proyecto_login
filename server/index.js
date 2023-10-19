const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())


app.listen(3002, ()=> {
    console.log('Server escuchando en puerto 3002')
})

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database:'mialqui'
})

app.post('/register', (req, res) =>{
    const sentEmail = req.body.Email
    const setUsername= req.body.Username
    const sentPassword = req.body.Password

    const SQL = 'INSERT INTO users (email, username, password) VALUES (?,?,?)'

    const Values = [sentEmail, setUsername, sentPassword]

    db.query(SQL, Values, (err) =>{
        if(err){
            res.send(err)
        }
        else{
            console.log('Usuario insertado con exitado')
            res.send({message: 'Usuario agregado!'})
        }
    })
})
