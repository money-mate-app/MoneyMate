import { lazyImport } from "@/lib/utils";
import { Navigate, RouteObject } from "react-router-dom";

const { Auth } = lazyImport(() => import("@/modules/auth"), "Auth");

export const publicRoutes: RouteObject[] = [
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "*",
        element: <Navigate to="." />,
      },
    ],
  },
];
