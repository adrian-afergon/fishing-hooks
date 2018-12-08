import * as React from 'react';
import { Bait } from '../domain/Bait';
import { Fisherman } from "../domain/Fisherman";

type SetBait = React.Dispatch<React.SetStateAction<Bait[]>>

function createHandlers(baits: Bait[], setBaits: SetBait) {
  const handleAddToBaitBasket = (currentBait: string) => {
    setBaits(
      new Fisherman(baits)
        .addToBaitBasket(new Bait(currentBait))
        .getBaitBasket()
    )
  }

  const hasBaits = () => {
    return new Fisherman(baits)
      .hasBaits()
  }

  return {
    hasBaits,
    handleAddToBaitBasket
  }
}

export function createFishermanHook() {

  function useFisherman(): [Bait[], () => boolean, (currentBait: string) => any] {
    const [baits, setBaits] = React.useState([] as Bait[]);
    const { handleAddToBaitBasket, hasBaits } = createHandlers(baits, setBaits)
    return [baits, hasBaits, handleAddToBaitBasket];
  }
  return useFisherman;
}
