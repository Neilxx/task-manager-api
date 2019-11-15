const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT
const corsOptions = {
  credentials: true,
  origin: 'http://localhost:8080'
}

app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})
