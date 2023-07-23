import { Suspense, lazy } from "react";
import Loading from "./loading";
const Login = lazy(() => import("@/modules/auth/components/login"));
import Logo from "@/assets/images/money-mate-black.png";
import { motion } from "framer-motion";

export function Auth() {
  return (
    <Suspense fallback={<Loading />}>
      <motion.div
        className="flex justify-center items-center h-screen w-full relative bg-black overflow-hidden p-6 md:p-44 lg:space-x-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
        }}
      >
        <motion.div
          className="flex-1 flex-col h-full items-end justify-center hidden lg:flex"
          initial={{ x: "-50vw", scale: 0 }}
          animate={{ x: 0, scale: 1 }}
          transition={{
            duration: 0.5,
          }}
        >
          <div className="mb-20">
            <div className="ml-[-0.75rem] mb-[-1.5rem] aspect-square h-[150px]">
              <img src={Logo} className="" />
            </div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-teal-300">
              Join MoneyMate
            </h1>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight leading-loose lg:text-5xl mt-3">
              For a smarter financial journey.
            </h1>
            <h3 className="scroll-m-20 text-2xl tracking-tight mt-10 text-muted-foreground">
              Sign in now to take control of your income expenses, and group
              spending.
            </h3>
          </div>
        </motion.div>
        <motion.div
          className="flex-1 flex justify-start"
          initial={{ x: "100vw", scale: -1 }}
          animate={{ x: 0, scale: 1 }}
          transition={{
            // delay: 0.5,
            duration: 1.5,
          }}
        >
          <Login />
        </motion.div>
      </motion.div>
    </Suspense>
  );
}
