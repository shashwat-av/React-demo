import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.css";
import TodoApp from "./components/TodoList/TodoApp";
import App from "./components/Counter-app/App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

//(If Counter-App uncomment below)
ReactDOM.render(<App />, document.getElementById("root"));
//ReactDOM.render(<TodoApp />, document.getElementById("root"));
serviceWorker.unregister();
