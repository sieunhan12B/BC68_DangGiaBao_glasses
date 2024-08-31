import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import BaiTapGlasses from "../page/BaiTapGlasses";
import { path } from "../common/path";

const useRoutesCustom = () => {
  const routes = useRoutes([
    {
      path: path.matKinh,
      element: <BaiTapGlasses />,
    },
  ]);
  return routes;
};

export default useRoutesCustom;
