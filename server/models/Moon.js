import mongoose from 'mongoose'

export const MoonsSchema = new mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String },
  planetId: { type: mongoose.Schema.Types.ObjectId, ref: 'Planets' },
  moonId: { type: mongoose.Schema.Types.ObjectId }
}, { timestamps: true, toJSON: { virtuals: true } })
