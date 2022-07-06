import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "../../routes";

export default () => {
  const content = useRoutes(routes);
  return <>{content}</>;
};
