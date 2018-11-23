type BaitId = number;

export class Bait {
  public id: BaitId;
  public name: string;

  constructor (name: string) {
    this.name = name
    this.id = Math.round(Math.random() * 10e10)
  }
}

export class Fisherman {
  public baitBasket: Bait[];

  constructor() {
    this.baitBasket = []
  }

  addToBaitBasket (bait: Bait) {
    this.baitBasket.push(bait);
  }
}
