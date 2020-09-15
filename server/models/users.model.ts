import mongoose, { Schema, Document } from 'mongoose'

export interface UserAccount extends Document {
  username: string,
  password: string,
  firstName: string
}

const UserAccountModel: Schema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true }
})

const User = mongoose.model<UserAccount>('UserAccountSchema', UserAccountModel)
export default User