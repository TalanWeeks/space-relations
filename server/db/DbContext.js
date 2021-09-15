import mongoose from 'mongoose'
import { GalaxySchema } from '../models/Galaxy'
import { StarsSchema } from '../models/Stars'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema)

  Galaxy = mongoose.model('Galaxy', GalaxySchema)

  Stars = mongoose.model('Star', StarsSchema)
}

export const dbContext = new DbContext()
