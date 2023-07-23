import { Route, Routes } from "react-router-dom";
import { lazyImport } from "./lib/utils";
import Providers from "./providers";
import { Auth } from "./modules/auth";

const { AuthRoutes } = lazyImport(
  () => import("@/modules/auth/routes"),
  "AuthRoutes"
);
const App = () => {
  return (
    <Providers>
      {/* <AuthRoutes /> */}
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Providers>
  );
};

export default App;
