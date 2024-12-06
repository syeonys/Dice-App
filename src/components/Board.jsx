
import Dice from './components/Dice';
import '../styles/Board.css';

function Board(name, color, gamehistory) {
  const num = gamehistory[gamehistory.length - 1] || 1
  const sum = gamehistory.reduce((sum, i) => sum + i, 0)

  return (

    <div>

    </div>
  );
}

export default Board;
