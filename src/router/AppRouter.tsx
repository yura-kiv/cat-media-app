import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes, mainPageRoute } from "./routes";
import Layout from "../layouts/Layout";
import LayoutRightSectionHeader from "../layouts/LayoutRightSectionHeader";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
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
