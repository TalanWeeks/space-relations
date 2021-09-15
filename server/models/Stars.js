import mongoose from 'mongoose'

export const StarsSchema = new mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String },
  galaxyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Galaxy' },
  starsId: { type: mongoose.Schema.Types.ObjectId }
}, { timestamps: true, toJSON: { virtuals: true } })
