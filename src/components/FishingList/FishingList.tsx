import * as React from 'react';

interface BaitViewModel {
  id: number
  name: string
}

interface FishingListProps {
  onAddToBaitBasket: (baitName: string) => any
  baits: BaitViewModel[]
}

export const FishingList: React.SFC<FishingListProps> = (props) => {
  const [currentBait, setCurrentBait] = React.useState('');
  return (
    <div>
      <h1>Baits</h1>
      <input name="baits" onChange={(e) => {setCurrentBait(e.target.value)}} />
      <button onClick={() => props.onAddToBaitBasket(currentBait)}>Add to list</button>
      <ul>
        {props.baits.map(bait => <li key={bait.id}>{bait.name}</li>)}
      </ul>
    </div>
  )
}

