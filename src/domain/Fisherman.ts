import { Bait } from "./Bait";
import { Fish } from "./Fish";

export class Fisherman {
  constructor(private baitBasket: Bait[] = [], private fishCollection: Fish[] = []) {
  }

  hasBaits () {
    return !this.baitBasket.length
  }

  getBaitBasket () {
    return this.baitBasket
  }

  addToBaitBasket(bait: Bait) {
    return new Fisherman([...this.baitBasket, bait], this.fishCollection);
  }

  fish(aFish: Fish) {
    return new Fisherman(this.baitBasket, [...this.fishCollection, aFish]);
  }
}
