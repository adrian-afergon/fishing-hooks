import * as React from 'react';
import { Bait } from '../domain/Bait';
import { Fisherman } from "../domain/Fisherman";

type SetBait = React.Dispatch<React.SetStateAction<Bait[]>>

export function createFishermanHook() {
  const handleAddToBaitBasket = (baits: Bait[], setBaits: SetBait) => (currentBait: string) => {
    setBaits(
      new Fisherman(baits)
        .addToBaitBasket(new Bait(currentBait))
        .getBaitBasket()
    )
  }

  function useFisherman(): [Bait[], (currentBait: string) => any] {
    const [baits, setBaits] = React.useState([] as Bait[]);
    return [baits, handleAddToBaitBasket(baits, setBaits)];
  }
  return useFisherman;
}
