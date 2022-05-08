
// import React from "react";
// class App extends React.Component{
//   render(){
//      return (
//       <div>
//         첫 번째 div입니다.
//       </div>
//       <div>
//         두 번째 div입니다.
//       </div>
//       )
//     }
// }

// export default App; 

//태그는 꼭 닫혀있어야 한다. 
// 모든 태그는 2개 이상이 된다면 꼭 하나로 감싸져야 한다. 
import React from "react";
class App extends React.Component{
  render(){
     return (
      <div>
         <div>
          첫 번째 div
         </div>
         <div>
          두 번째 div
        </div>
      </div>
      )       
    }
}

//jsx안에 js사용 -> 중괄호 사용
export default App;

import React from "react";
class App extends React.Component{
 render(){
	const greeting = "hello";
	return 
 	       <h1>{greeting}</h1>
    }
}
