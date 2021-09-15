import mongoose from 'mongoose'

export const GalaxySchema = new mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String },
  galaxyId: { type: mongoose.Schema.Types.ObjectId }
}, { timestamps: true, toJSON: { virtuals: true } })
