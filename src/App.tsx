import React from "react";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div
      id="App"
      className="relative max-w-full min-h-screen flex items-top justify-between pb-3 pt-8"
    >
      <AppRouter />
    </div>
  );
}

export default App;
