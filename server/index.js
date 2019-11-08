require('dotenv').config()
const ctrl = require('./controllers.js')
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env

const app = express()
// TOP LEVEL MIDDLEWARE \\
app.use(express.json())

massive(CONNECTION_STRING).then(databaseConnection => {
   app.set('db',databaseConnection)
   console.log('TAC-COM ONLINE')
   app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} bottles of [ R E D A C T E D ] on the wall!`))
})
// ENDPOINTS \\
app.get('/api/houser', ctrl.getAll)
app.post('/api/houser', ctrl.add)
app.delete('/api/houser/:id',ctrl.delete)