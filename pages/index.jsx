import React from "react";
import Head from "next/head";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Random from "../components/Random";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Movies</title>
      </Head>
      <Random />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
