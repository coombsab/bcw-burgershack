import { fakeDb } from "../db/FakeDb.js"
import { BadRequest } from "../utils/Errors.js"

class MenuService {
  async getMenu() {
    return fakeDb
  }
}

export const menuService = new MenuService()