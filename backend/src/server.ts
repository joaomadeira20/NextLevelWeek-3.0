import express from 'express'
import routes from './routes'
import './database/connection'
import 'express-async-errors'
import path from 'path'
import errorHandler from './errors/handler'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors())
app.use(routes)

app.use(errorHandler)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.listen(3333)