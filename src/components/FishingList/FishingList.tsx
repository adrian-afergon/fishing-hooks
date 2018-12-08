import * as React from 'react';
import { InputWithButton } from '../InputWithButton/InputWithButton';

interface BaitViewModel {
  id: number
  name: string
}

interface FishingListProps {
  onAddToBaitBasket: (baitName: string) => any
  baits: BaitViewModel[]
}

export const FishingList: React.SFC<FishingListProps> = (props) => {
  return (
    <div>
      <h1>Baits</h1>
      <InputWithButton onSubmit={bait => props.onAddToBaitBasket(bait)}/>
      <ul>
        {props.baits.map(bait => <li key={bait.id}>{bait.name}</li>)}
      </ul>
    </div>
  )
}

