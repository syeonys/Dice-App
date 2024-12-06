import {useState} from 'react';
import Button from './components/Button';

function App() {

  // const [현재 상태값, 상태를 업데이트하는 함수] = useState(초기값);
  const [PlayNum, setPlyNumber] = useState(1);

  const randomNumber = () => {
    // ceil = 숫자값 올림 // floor = 숫자값 내림
    return Math.ceil(Math.random() * 6)
  }

  const handleRollClick = () => {
    // randomNumber 정의
    const nextNum = randomNumber()
    // randomNumber 출력
    setPlyNumber(nextNum)
    // 점수 누적
  }


  return (
    // div지우면 구조 속 div상자 생략됨
    <div className='App'>
      {/* 단일태그로 부르면 써놓은 그대로 가져옴 */}
      {/* <Button /> */}

      {/* 태그로 부르면 {childern}prop 사용하면 형식 가져와서 내용 바꿀 수 있음 */}
      <div className="App_btn">
        <Button onClick={handleRollClick}>던지기</Button>
        <Button>처음부터</Button>
      </div>

      <Dice color='red' num={PlayNum} />
    </div>
  );
}

export default App;
