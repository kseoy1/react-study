import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onchange = (event) => setKeyword(event.target.value);
  console.log("i run all the time"); // state 변할 때마다 매번 console.log 실행
  useEffect(() => {
    console.log("CALL THE API....");
  }, []);
  useEffect(() => {
    console.log("SEARCH FOR", keyword);
  }, [keyword]); // keyword가 변화할때 코드를 실행할거라고 react.js에 알려줌

  return (
    <div>
      <input
        value={kwyword}
        onChange={onchange}
        type="text"
        placeholder="Serch here..."
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;

// useEffect 글자를 타이핑할 때마다 API를 새로 호출하지 않고 한번만 호출해준다.

// search keyword에 변화가 있을 때 만! marvel영화를 검색하고 싶을 때
// 즉, 특정한 코드만 변화했을 때 원하는 코드들을 실행할 수 있는 방법
// -> useEffect(() => {
// console.log("SEARCH FOR", keyword);
// }, []);
// 이렇게 실행하면 1번만 됨
// 그리고 []자리에 keyword 써줌
// -> keyword가 변화할 때 코드를 실행할 거라고 react.js에게 알려주는 것.
// 이것이 바로 빈 array를 써주었을 때 코드가 단 한번만 실행되는 이유
// react가 지켜볼 게 아무것도 없으니 처음 한번만 실행되는 것
