const express = require('express')
const userRouter = require('./routes/user.routes')
const postRouter = require('./routes/post.routes')
const cors = require('cors')

const PORT = process.env.PORT || 8080

const Pool = require('pg').Pool

const pool = new Pool({
    host:'localhost',
    user: 'postgres',
    port: 5432,
    password: 'root',
    database: 'postgres',
})
const app = express()

const corsOptions = {
    origin: "*"
}

app.use(cors(corsOptions))

app.use(express.json())

app.use('/api', userRouter)
app.use('/api', postRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))


