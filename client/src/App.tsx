import { lazyImport } from "./lib/utils";
import Providers from "./providers";

const { AuthRoutes } = lazyImport(
  () => import("@/modules/auth/routes"),
  "AuthRoutes"
);
const App = () => {
  return (
    <Providers>
      <AuthRoutes />
    </Providers>
  );
};

export default App;
