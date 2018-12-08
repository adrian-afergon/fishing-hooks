import * as React from 'react';
import { FishingList } from '../components/FishingList/FishingList';
import { createFishermanHook } from '../hooks/createFishermanHook';

interface FishingListContainerProps {}

const useFisherman = createFishermanHook()

export const FishingContainer: React.SFC<FishingListContainerProps> = () => {
  const [baits, haveBaits, handleAddToBaitBasket] = useFisherman()

  const handleFish = () => {
    const isFished = Math.random() > 0.5;
    if (isFished) {
      // TODO: add fish to fisherman
    }
    //lose bait
  }

  return (
    <>
      <FishingList
        onAddToBaitBasket={handleAddToBaitBasket}
        baits={baits}
      />
      <button onClick={handleFish} disabled={haveBaits()} >Fish</button>
    </>

  )
}
