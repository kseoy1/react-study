function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    //수정하는 함수 사용시 2가지 옵션
    setToDos((currentArray) => [toDo, ...currentArray]); //1. 함수를 보내는 방법
    //함수의 첫번째  인자를 현재 state로 보낸다.
    //현재 toDos를 받아와서 새로운 toDo의 array로 return하고 있다.
    setToDo(""); //2. ("") -> 이값은 저장한 data가지고 있다.
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onsubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
// array(단순 string으로 구성)를 가져와서 그 array의 item들을 변형해서 li가 되도록한다.
//return하는 값이 어떤 값이던지 그 값은 새로운 array가 된다.
export default App;
