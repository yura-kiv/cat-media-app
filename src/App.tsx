import React from "react";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App relative w-full min-h-screen flex items-top justify-between pb-3 overflow-hidden pt-8">
      <AppRouter />
    </div>
  );
}

export default App;
