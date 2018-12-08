type FishId = number;

export class Fish {
  public id: FishId;
  public name: string;

  constructor (name: string) {
    this.name = name
    this.id = Math.round(Math.random() * 10e10)
  }
}
