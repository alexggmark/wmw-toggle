import express, { Application, Request, Response, NextFunction } from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import LogTime from './routes/logtime.routes'
import './ProcessEnvInterface'
import dotenv from 'dotenv'
dotenv.config()

const app: Application = express()
const port: number = 5000 || process.env.PORT

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    return console.log('Connected')
  })
  .catch((err) => {
    console.log(err)
  })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(LogTime)

app.listen(port, () => {
  console.log(`Server running on ${port}`)
})