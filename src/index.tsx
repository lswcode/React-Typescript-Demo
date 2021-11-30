import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppStateProvider } from "./state/appStateProvider";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

ReactDOM.render(
  <React.StrictMode>
    {/* 使用AppStateProvider包裹的子组件就都能使用AppStateProvider中的全局状态数据了 */}
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
