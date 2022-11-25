const express = require('express')
const cors = require('cors')

const db = require('./database')
const routes = require('./routes')

const app = express()

db.connect()

const allowedOrigins = [
    'http://127.0.0.1:5500',
]

app.use(cors({
    origin: function(origin, callback) {
        const allowed = !origin || allowedOrigins.includes(origin)

        callback(null, allowed)
    }
}))

app.use(express.json())

app.use('/api', routes)

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server is running on port ${port}`))