import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'semantic-ui-css/semantic.min.css';

import { Provider } from "react-redux";
import store from './redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
