import { menuService } from "../services/MenuService.js";
import BaseController from "../utils/BaseController.js";

export class MenuController extends BaseController {
  constructor() {
    super("api/menu")
    this.router
      .get("", this.getMenu)
  }

  async getMenu(req, res, next) {
    try {
      const menu = await menuService.getMenu()
      res.send(menu)
    }
    catch(error) {
      next(error)
    }
  }
}