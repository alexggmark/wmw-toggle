import express, { Application, Request, Response, NextFunction } from 'express'
const router = express.Router()
import { logtimeController, stopLogTime, startLogTime } from '../controllers/logtime.controllers'

router.post(
  '/createLogtime',
  logtimeController
)

router.put(
  '/stopLogTime',
  stopLogTime
)

router.put(
  '/startLogTime',
  startLogTime
)

export default router