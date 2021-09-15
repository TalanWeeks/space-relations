import { starsService } from '../services/StarsService'
import BaseController from '../utils/BaseController'

export class StarsController extends BaseController {
  constructor() {
    super('api/stars')
    this.router
      .get('', this.getStars)
      .post('', this.createStar)
      .put('/:starId', this.editStar)
  }

  async createStar(req, res, next) {
    const star = await starsService.createStar(req.body)
    res.send(star)
  }

  async editStar(req, res, next) {
    try {
      const star = await starsService.editStar(req.params.starId, req.body)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async getStars(req, res, next) {
    try {
      const star = await starsService.getStars(req.query)
      return res.send(star)
    } catch (error) {
      next(error)
    }
  }
}
