import { Request, Response } from "express"
import LogTimeSchema from "../models/logtime.model"

export const logtimeController = async (req: Request, res: Response) => {
  console.log(req.body)
  try {
    const request = new LogTimeSchema(req.body)
    await request.save()
    res.send(request)
  } catch (err) {
    console.log(`ERROR: ${err}`)
  }
}

export const stopLogTime = async (req: Request, res: Response) => {
  console.log('stopLogTime')
  try {
    const request = await LogTimeSchema.findOne({ _id: req.body.id })
    if (request === null) return res.status(400)
    await request.updateStopTime()
    res.send(request)
  } catch (err) {
    console.log(`ERROR: ${err}`)
  }
}

export const startLogTime = async (req: Request, res: Response) => {
  console.log('startLogTime')
  try {
    const request = await LogTimeSchema.findOne({ _id: req.body.id })
    if (request === null) return res.status(400)
    await request.updateStartTime()
    res.send(request)
  } catch (err) {
    console.log(`ERROR: ${err}`)
  }
}
