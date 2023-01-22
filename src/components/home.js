import React from "react";
import logo from "../logo.svg";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByValue,
} from "../features/counter/counterSlice";

const Home = () => {
  const state = useSelector((state) => state);
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <div>
        <button onClick={() => dispatch(incrementByValue(2))}>+</button>
        {value}
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </header>
  );
};

export default Home;
