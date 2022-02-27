import "./App.css";
import connect from "./redux-core/connect.js";
// import connect from "./redux-core/connect2.js";
function App(props) {
  console.log("props", props);
  function handleClick() {
    // 懒得弄Action生成器了
    props.dispatch({ type: "ADD" });
  }

  return (
    <div className="App">
      <span>{props.count}</span>
      <button onClick={handleClick}>加一</button>
    </div>
  );
}

export default connect(
  (state) => state,
  (dispatch) => ({ dispatch: dispatch })
)(App);
