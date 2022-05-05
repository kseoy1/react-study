
// import React from "react";
// import logo from "./logo.svg"; 
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


//함수형 컴포넌트 -> function으로 정의하고 return문에 jsx코드 반환
import React from "react";
import "./App.css";

function NameBox() {
  const name = "test";
  return <div>{name}</div>;
}

//클래스형 컴포넌트 -> class로 정의하고 render() 함수에서 jsx 코드 반환
import React, { Component } from "react";

class NameBox extends Component {
  render() {
    const name = "react";
    return <div className="react">{name}</div>;
  }
}


/*         왜 App.js에 있는 화면이 메인으로 띄워질까?    */
/*
리액트는 번들러를 활용한다.
특히 리액트 프로젝트에서는 webpack을 주로 사용하는데 webpack은 가장 처음으로 읽어들이는 entry point부터 
시작하여 필요한 모든 모듈을 다 불러온 뒤 번들링하여 한 파일로 합쳐서 bundle.js 에 저장하는 역할을 한다.
webpack의 entry point였던 index.js에 App.js의 요소를 그리도록 작성되어 있기 때문에 첫 화면에 App.js의 것들이 보여지게 된다.

*/