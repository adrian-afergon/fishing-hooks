import * as React from 'react';
import { FishingList } from '../components/FishingList/FishingList';
import { Bait } from '../domain/Bait';
import { Fisherman } from "../domain/Fisherman";

const adrianFisherman = new Fisherman()

export function cosas() : [Bait[], (baitName: string) => void] {
  const [baits, setBaits] = React.useState([] as Bait[]);

  const addToBaitBasket = (currentBait: string) => {
    adrianFisherman.addToBaitBasket(new Bait(currentBait))
    setBaits(adrianFisherman.baitBasket)
  }

  return [baits, addToBaitBasket]
}

