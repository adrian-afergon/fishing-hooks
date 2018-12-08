import * as React from 'react';
import { FishingList } from '../components/FishingList/FishingList';
import { createFishermanHook } from '../hooks/createFishermanHook';

interface FishingListContainerProps {}

const useFisherman = createFishermanHook()

export const FishingContainer: React.SFC<FishingListContainerProps> = () => {
  const [baits, handleAddToBaitBasket] = useFisherman()

  return (
    <FishingList
      onAddToBaitBasket={handleAddToBaitBasket}
      baits={baits}
    />
  )
}
