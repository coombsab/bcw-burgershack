import { fakeDb } from "../db/FakeDb.js";
import { BadRequest } from "../utils/Errors.js";

class SidesService {
  async getSideById(sideId) {
    const side = fakeDb.sides.find(s => s.id === sideId)
    if (!side) {
      throw new BadRequest("Invalid Side ID")
    }
    return side
  }
  getSides() {
    return fakeDb.sides
  }

}

export const sidesService = new SidesService()