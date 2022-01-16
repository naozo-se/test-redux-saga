import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import App2 from "./App2";
import store from "./store/index";

render(
  <React.StrictMode>
    {/* storeとして設定 */}
    <Provider store={store}>
      <App />
      <App2 />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
