"use client";

import { useState } from "react";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 2,
            gcTime: 300000,
            staleTime: 120000,
            retryDelay: (attempIndex) =>
              Math.min(1000 * 2 ** attempIndex, 30000),
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
