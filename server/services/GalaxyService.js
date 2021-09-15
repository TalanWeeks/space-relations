import { dbContext } from '../db/DbContext.js'
import { BadRequest, Forbidden } from '../utils/Errors.js'

class GalaxyService {
  async createGalaxy(galaxyData) {
    const galaxy = await dbContext.Galaxy.create(galaxyData)
    return galaxy
  }

  async editGalaxy(galaxyId, galaxyData) {
    const galaxy = await this.getGalaxyById(galaxyId)
    galaxy.name = galaxyData.name || galaxy.name
    galaxy.description = galaxyData.description || galaxy.description
    await galaxy.save()
    return galaxy
  }

  async getGalaxyById(galaxyId) {
    const galaxy = await dbContext.Galaxy.findById(galaxyId).populate('creator', 'name picture')
    if (!galaxy) {
      throw new BadRequest('Invalid galaxy Id')
    }
    return galaxy
  }

  async getGalaxy(query) {
    const galaxy = await dbContext.Galaxy.find(query).populate()
    return galaxy
  }
}

export const galaxyService = new GalaxyService()
