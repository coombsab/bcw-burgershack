import { sidesService } from "../services/SidesService.js";
import BaseController from "../utils/BaseController.js";

export class SidesController extends BaseController {
  constructor() {
    super("api/menu")
    this.router
      .get("/sides", this.getSides)
      .get("/sides/:sideId", this.getSideById)
      .post("/sides", this.createSide)
}

  async getSides(req, res, next) {
    try {
      const sides = await sidesService.getSides()
      res.send(sides)
    }
    catch(error) {
      next(error)
    }
  }

  async getSideById(req, res, next) {
    try {
      const sideId = req.params.sideId
      const side = await sidesService.getSideById(sideId)
      res.send(side)
    }
    catch(error) {
      next(error)
    }
  }

  async createSide(req, res, next) {
    try {
    
    }
    catch(error) {
      next(error)
    }
  }
}