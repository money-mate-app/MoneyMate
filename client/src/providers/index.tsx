import { Suspense, type ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Button } from "../components/ui/button";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { queryClient, __DEV__ } from "@/lib";
import SocketProvider from "./SocketProvider";

const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h1 className="text-lg font-semibold">Ooops, something went wrong :( </h1>
      <Button
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </Button>
    </div>
  );
};

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<h1>Loading Page</h1>}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            {__DEV__ && <ReactQueryDevtools />}
            <SocketProvider>{children}</SocketProvider>
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </Suspense>
  );
}
