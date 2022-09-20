import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";

export class BurgersController extends BaseController {
  constructor() {
    super("api/menu")
    this.router
      .get("/burgers", this.getBurgers)
      .get("/burgers/:burgerId", this.getBurgerById)
      .post("/burgers", this.createBurger)

  }

  async getBurgers(req, res, next) {
    try {
      const burgers = await burgersService.getBurgers()
      res.send(burgers)
    }
    catch(error) {
      next(error)
    }
  }

  async getBurgerById(req, res, next) {
    try {
      const burgerId = req.params.burgerId
      const burger = await burgersService.getBurgerById(burgerId)
      res.send(burger)
    }
    catch(error) {
      next(error)
    }
  }

  async createBurger(req, res, next) {
    try {
      const formData = req.body
      const burger = await burgersService.createBurger(formData)
      res.send(burger)
    }
    catch(error) {
      next(error)
    }
  }
}