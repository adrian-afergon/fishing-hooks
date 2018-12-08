import * as React from 'react';

interface InputWithButtonProps {
  onSubmit: (text: string) => void
}

export const InputWithButton: React.SFC<InputWithButtonProps> = props => {
  const [currentText, setCurrentText] = React.useState('');

  return (
    <form onSubmit={e => {
      e.preventDefault()
      props.onSubmit(currentText)
    }}>
      <input name="baits" onChange={(e) => {setCurrentText(e.target.value)}} />
      <input type="submit" value="Add to list" />
    </form>
  )
}

