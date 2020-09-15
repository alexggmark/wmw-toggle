import mongoose, { Schema, Document } from 'mongoose'

export interface LogItemInterface extends Document {
  userId: string,
  taskName: string,
  projectName: string,
  billable: number,
  lastStart: Date,
  logTime: number,
  running: boolean,
  createdAt: Date,
  updateStopTime(): Promise<Function>,
  updateStartTime(): Promise<Function>
}

const LogItemModel: Schema = new Schema({
  userId: { type: String, required: true },
  taskName: { type: String, required: true },
  projectName: { type: String, required: true },
  billable: { type: Number, required: true },
  lastStart: { type: Date, default: Date.now },
  logTime: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
})

LogItemModel.methods.updateStopTime = async function() {
  const calculatedTime = await this.model('LogItemSchema').aggregate([
    { $match: { _id: this._id } },
    { $addFields: { currentTime: new Date() } },
    { $project: { logTime: { $subtract: [ "$currentTime", "$lastStart" ] } } }
  ])
  console.log(`Calculated time: ${calculatedTime[0].logTime / 600}s`)
  this.logTime += calculatedTime[0].logTime
  return await this.save()
}

LogItemModel.methods.updateStartTime = async function() {
  this.lastStart = Date.now()
  return await this.save()
}

const LogItem = mongoose.model<LogItemInterface>('LogItemSchema', LogItemModel)
export default LogItem