import { useState, useEffect } from "react";

function Hello() {
  function byFn() {
    console.log("bye:(");
  }
  function hiFn() {
    console.log("created :)");
    return byFn;
  }
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;

// Hello 컴포넌트를 hide할 때는 컴포넌트가 스크린에서 지워지고
// show를 누르면 컴포넌트가 다시 생성되므로
// useEffect도 다시 실행됨을 알 수 있다.
// -> 정해준 useEffect가 컴포넌트가 생성될 때 콘솔 로그를 하라는 것이기 때문
// function Hello() {
// useEffect(() => {
// console.log("Hi");
// }, []);
// 컴포넌트가 destroy될 때도 코드를 실행할 수 있다
// -> return으로 함수를 만들어주면 된다.