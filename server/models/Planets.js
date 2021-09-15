import mongoose from 'mongoose'

export const PlanetsSchema = new mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String },
  starsId: { type: mongoose.Schema.Types.ObjectId, ref: 'Stars' },
  planetId: { type: mongoose.Schema.Types.ObjectId }
}, { timestamps: true, toJSON: { virtuals: true } })
