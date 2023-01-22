import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByValue,
} from "./features/counter/counterSlice";
import RoutesComponent from "./routes/routes";

function App() {

  return (
    <div className="App">
      <RoutesComponent />
    </div>
  );
}

export default App;
