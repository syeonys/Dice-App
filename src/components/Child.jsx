function Child({text,color}) {
  // 리액트 스트링모드 (main.jsx) 때문에 두 번 찍힘. 이거 주석처리 하면 한 번만 나옴
  // 스트링 모드 주석처리하고 개발하는게 좋음
  console.log(text);
  return (
    <div>
      <p style={{color:color}}>{text}</p>
    </div>
  );
}
export default Child;