import express, { Application, Request, Response, NextFunction } from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import './ProcessEnvInterface'
import dotenv from 'dotenv'
dotenv.config()

const app: Application = express()
const port: number = 5000 || process.env.PORT

console.log('Penis')

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true })
  .then(() => {
    return console.log('Connected')
  })
  .catch((err) => {
    console.log('Error')
  })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Server running on ${port}`)
})