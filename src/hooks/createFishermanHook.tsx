import * as React from 'react';
import { Bait } from '../domain/Bait';
import { Fisherman } from "../domain/Fisherman";

type SetBait = React.Dispatch<React.SetStateAction<Bait[]>>

export function createFishermanHook() {
  let adrianFisherman = new Fisherman();

  const handleAddToBaitBasket = (setBaits: SetBait) => (currentBait: string) => {
    adrianFisherman = adrianFisherman.addToBaitBasket(new Bait(currentBait));
    setBaits(adrianFisherman.getBaitBasket());
  }

  function useFisherman(): [Bait[], (currentBait: string) => any] {
    const [baits, setBaits] = React.useState([] as Bait[]);
    return [baits, handleAddToBaitBasket(setBaits)];
  }
  return useFisherman;
}
