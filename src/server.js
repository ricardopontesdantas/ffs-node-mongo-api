const express = require('express')

const db = require('./database')
const routes = require('./routes')

const app = express()

db.connect()

app.use(express.urlencoded({ extended: true }))
app.use('/', routes)

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server is running on port ${port}`))