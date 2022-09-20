import { fakeDb } from "../db/FakeDb.js";
import { BadRequest } from "../utils/Errors.js";
import { logger } from "../utils/Logger.js";

class BurgersService {
  async createBurger(formData) {
    formData.id = Math.floor(Math.random() * 10000 + 2000)
    fakeDb.burgers.push(formData)
    return formData
  }
  async getBurgerById(burgerId) {
    const burger = fakeDb.burgers.find(b => b.id == burgerId)
    if (!burger) {
      throw new BadRequest("Invalid Burger ID")
    }
    return burger
  }
  getBurgers() {
    return fakeDb.burgers
  }

}

export const burgersService = new BurgersService()