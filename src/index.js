import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppLoggedIn from "./AppLoggedIn";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store";
import { Provider } from "react-redux";

function RenderPage(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <AppLoggedIn />;
  }
  return <App />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RenderPage isLoggedIn={false} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
