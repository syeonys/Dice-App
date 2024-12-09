import React, { useState } from 'react'
import Button from './components/Button'
import Board from './components/Board';


function App() {

  const [MygameHistory, setMygameHistory] = useState([]);
  const [YougameHistory, setyougameHistory] = useState([]);

  const randomNumber = () => {
    return Math.ceil(Math.random() * 6)
  }

  const handleRollClick = () => {
    const nextNum = randomNumber()
    const nextYouNum = randomNumber()

    setMygameHistory([...MygameHistory, nextNum])
    setyougameHistory([...YougameHistory, nextYouNum])
  }

  const handleClearClick = () => {

    setMygameHistory([])
    setyougameHistory([])
  }


  return (
    <div className='App-container'>
      <div className='App_btn'>
        <Button onClick={handleRollClick} color='blue'>던지기</Button>
        <Button onClick={handleClearClick} color='red' >처음부터</Button>
      </div>
      <div className='App-board'>
        <Board name='나' color="blue" gamehistory={MygameHistory} />
        <Board name='당신' color="red" gamehistory={YougameHistory} />
      </div>
    </div>

  )
}

export default App