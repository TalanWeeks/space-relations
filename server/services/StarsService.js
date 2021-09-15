import { dbContext } from '../db/DbContext.js'
import { BadRequest, Forbidden } from '../utils/Errors.js'

class StarsService {
  async createStar(starData) {
    const star = await dbContext.Stars.create(starData)
    return star
  }

  async editStar(starId, starData) {
    const star = await this.getStarById(starId)
    star.name = starData.name || star.name
    star.description = starData.description || star.description
    await star.save()
    return star
  }

  async getStarById(starId) {
    const star = await dbContext.Stars.findById(starId).populate('creator', 'name picture')
    if (!star) {
      throw new BadRequest('Invalid stars Id')
    }
    return star
  }

  async getStars(query) {
    const star = await dbContext.Stars.find(query).populate()
    return star
  }
}

export const starsService = new StarsService()
