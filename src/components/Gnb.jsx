import React from 'react';

function Gnb() {
  const menuData = ['Home', 'Preoject', 'Work', 'UXUI', 'About']
  return (
    <div>
      <ul>
        {
          // foreach 처럼 배열객체 만들어주는 map (foreach는 화면에 출력안됨)
          menuData.map((item,i) => {
            // 출력시키려면 return문 써줘야됨
            return (
              // 오류 안나려면 고유한 key 값 줘야함, i를 주겟삼
              <li key={i}>{item}</li>
            )

          })
        }
      </ul>
    </div>
  );
}

export default Gnb;
