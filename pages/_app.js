import React from "react";
import Head from "next/head";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import store from "../store";
import { Container, Card } from "../components/Page/styles";
import Nav from "../components/Page";
import Search from "../components/Search";
import { global } from "../stitches.config.js";
const queryClient = new QueryClient();

const globalStyles = global({
  body: {
    margin: 0,
    padding: 0,
    color: "$grey100",
    backgroundColor: "$grey800",
    "@md": {
      backgroundColor: "$light",
    },
    fontFamily: "$mono",
  },
});

function MyApp({ Component, pageProps }) {
  globalStyles();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>Movies</title>
        </Head>
        <Nav />
        <Container>
          <Card initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <Search />
            <Component {...pageProps} />
          </Card>
        </Container>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
