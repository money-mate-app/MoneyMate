import { useRoutes } from "react-router-dom";
import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";

export const AuthRoutes = () => {
  const userAuthenticated = true;
  const commonRoutes = [
    ...(userAuthenticated ? protectedRoutes : []),
    ...publicRoutes,
  ];
  const element = useRoutes(commonRoutes);

  return <>{element}</>;
};
