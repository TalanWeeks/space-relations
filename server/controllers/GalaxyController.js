import { galaxyService } from '../services/GalaxyService'
import BaseController from '../utils/BaseController'

export class GalaxyController extends BaseController {
  constructor() {
    super('api/galaxy')
    this.router
      .get('', this.getGalaxy)
      .post('', this.createGalaxy)
      .put('/:galaxyId', this.editGalaxy)
  }

  async createGalaxy(req, res, next) {
    const galaxy = await galaxyService.createGalaxy(req.body)
    res.send(galaxy)
  }

  async editGalaxy(req, res, next) {
    try {
      const galaxy = await galaxyService.editGalaxy(req.params.galaxyId, req.body)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async getGalaxy(req, res, next) {
    try {
      const galaxy = await galaxyService.getGalaxy(req.query)
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
}
