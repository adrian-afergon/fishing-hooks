import { Bait } from "./Bait";

export class Fisherman {
  constructor(public baitBasket: Bait[] = []) {
  }

  addToBaitBasket(bait: Bait) {
    return new Fisherman([...this.baitBasket, bait]);
  }
}
