import mongoose, { Schema, Document } from "mongoose"
import { ResolveOptions } from "dns"

type LogTimeType = {
  start: number,
  stop: number | undefined
}

export interface LogItemInterface extends Document {
  userId: string,
  taskName: string,
  projectName: string,
  billable: number,
  logArray: Array<LogTimeType>,
  createdAt: Date,
  updateStopTime(): Promise<Function>,
  updateStartTime(): Promise<Function>
}

const LogItemModel: Schema = new Schema({
  userId: { type: String, required: true },
  taskName: { type: String, required: true },
  projectName: { type: String, required: true },
  billable: { type: Number, required: true },
  logArray: { type: Array, required: true, default: [] },
  createdAt: { type: Date, default: Date.now }
})

LogItemModel.methods.updateStopTime = async function() {
  this.logArray[this.logArray.length - 1].stop = Date.now()
  return await this.save()
}

LogItemModel.methods.updateStartTime = async function() {
  this.logArray.push({
    start: Date.now()
  })
  return await this.save()
}

const LogItem = mongoose.model<LogItemInterface>('LogItemSchema', LogItemModel)
export default LogItem