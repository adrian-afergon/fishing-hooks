import * as React from 'react';
import { FishingList } from '../components/FishingList/FishingList';
import { Bait } from '../domain/Bait';
import { Fisherman } from "../domain/Fisherman";

let adrianFisherman = new Fisherman()

interface FishingListContainerProps {

}

function useFisherman(): [Bait[], (currentBait: string) => any] {
  const [ baits, setBaits ] = React.useState([] as Bait[])

  const handleAddToBaitBasket = (currentBait: string) => {
    adrianFisherman = adrianFisherman.addToBaitBasket(new Bait(currentBait))
    setBaits(adrianFisherman.baitBasket)
  }

  return [baits, handleAddToBaitBasket];
}

export const FishingContainer: React.SFC<FishingListContainerProps> = () => {
  const [baits, handleAddToBaitBasket] = useFisherman()

  return (
    <FishingList
      onAddToBaitBasket={handleAddToBaitBasket}
      baits={baits}
    />
  )
}
