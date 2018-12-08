import { Bait } from "./Bait";

export class Fisherman {
  constructor(private baitBasket: Bait[] = []) {
  }

  getBaitBasket () {
    return this.baitBasket
  }

  addToBaitBasket(bait: Bait) {
    return new Fisherman([...this.baitBasket, bait]);
  }
}
