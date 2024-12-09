import diceBlue1 from '../assets/dice-blue-1.svg';
import diceBlue2 from '../assets/dice-blue-2.svg';
import diceBlue3 from '../assets/dice-blue-3.svg';
import diceBlue4 from '../assets/dice-blue-4.svg';
import diceBlue5 from '../assets/dice-blue-5.svg';
import diceBlue6 from '../assets/dice-blue-6.svg';
import diceRed1 from '../assets/dice-red-1.svg';
import diceRed2 from '../assets/dice-red-2.svg';
import diceRed3 from '../assets/dice-red-3.svg';
import diceRed4 from '../assets/dice-red-4.svg';
import diceRed5 from '../assets/dice-red-5.svg';
import diceRed6 from '../assets/dice-red-6.svg';


const DICE_IMAGES={
    blue:[diceBlue1,diceBlue2,diceBlue3,diceBlue4,diceBlue5,diceBlue6],
    red:[diceRed1,diceRed2,diceRed3,diceRed4,diceRed5,diceRed6]
}
 
function Dice({color,num=1}) {
    let diceImg=DICE_IMAGES[color][num-1];
    const alt=`${color}${num}`
  return (
    <div><img src={diceImg} alt={alt} /></div>
  )
}

export default Dice