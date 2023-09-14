import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes, mainPageRoute } from "./routes";
import LayoutMain from "../layouts/LayoutMain";
import LayoutRightSectionHeader from "../layouts/LayoutRightSectionHeader";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<LayoutMain />}
      >
        <Route {...mainPageRoute} />
        <Route
          path="/"
          element={<LayoutRightSectionHeader />}
        >
          {routes.map((route, index) => (
            <Route
              key={index}
              {...route}
            />
          ))}
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
