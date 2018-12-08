import * as React from 'react';
import { FishingList } from '../components/FishingList/FishingList';
import { Bait } from '../domain/Bait';
import { Fisherman } from "../domain/Fisherman";

const adrianFisherman = new Fisherman()

interface FishingListContainerProps {

}

export const FishingContainer: React.SFC<FishingListContainerProps> = () => {
  const [baits, setBaits] = React.useState([] as Bait[]);

  const handleAddToBaitBasket = (currentBait: string) => {
    adrianFisherman.addToBaitBasket(new Bait(currentBait))
    setBaits(adrianFisherman.baitBasket)
  }

  return (
    <FishingList
      onAddToBaitBasket={handleAddToBaitBasket}
      baits={baits}
    />
  )
}
