import express, { Application, Request, Response, NextFunction } from 'express'
const router = express.Router()
import { testController } from '../controllers/schema.controllers'

router.get(
  '/',
  testController
)
