import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "store/configureStore";
import MainView from "components/MainView";
import Router from "routes/Router";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <HashRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainView>
          <Router />
        </MainView>
      </PersistGate>
    </Provider>
  </HashRouter>
  // </React.StrictMode>
);
