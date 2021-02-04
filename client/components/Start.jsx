import React from 'react'

function Start(props) {
  const startGame = props.startGame
  const instructions =
    'How to play: Type in a synonym of the word and press Enter '
  return (
    <div className='start'>
      <h1>Peri Peri Word Master</h1>
      <p>{instructions}</p>
      <button onClick={startGame}>Start Game</button>
    </div>
  )
}

export default Start