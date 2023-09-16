import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { persistor, store } from "./store/store";
import { Provider } from "react-redux";
import { getSubID } from "./helpers/getSubID";
import "./index.css";

export const subID = getSubID();
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
