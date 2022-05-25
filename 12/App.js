import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    this.state((current) => ({ count: current.count + 1 })); //statefmf set할때 react외부의 상태에 의존하지 않는 가장 좋은 방법
  };
  minus = () => {
    this.state((current) => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    console.log("Component rendered");
  }
  componentDidUpdate() {
    console.log("I just updated");
  }
  componentWillUnmount(){
    console.log("Goodbye, cruel world")
  }
  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is:{this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
// set State 호출할 때 마다 새로운 state와 render function실행
// Mounting- component
//  constructor()
// js에서 class를 만들 때 호출되는 것
// -coponent가 mount될 때 호출
// componentDidMount()-component가 처음 render될 때 호출

// Updating
// componentDidUpdate()-coponet가 업데이트될 때 호출

// Unmounting- coponent가 죽는 것
// componentWillUnmount()

// setState()호출=>component 호출=>render 호출
// =>업데이트 완료 후 coponentDidUpdate 실행
