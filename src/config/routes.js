import { lazy } from "react";
import { Route } from "react-router-dom";

export const routes = {
  explorer: {
    name: "Explorer",
    path: "/explorer",
    component: lazy(() => import("../pages/explorer")),
    type: Route,
  },
  emptyRoute: {
    name: "DefautlRoute",
    path: "/",
    component: lazy(() => import("../pages/explorer")),
    type: Route,
  },
};

export const renderRoutes = Object.entries(routes);
