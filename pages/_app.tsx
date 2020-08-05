import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";

import { useStore } from "../store";
import GlobalStyles from "GlobalStyles";
import { client } from "apollo/";

const theme = {};

interface IProps {
  Component: any;
  pageProps: any;
}

const MyApp = (props: IProps) => {
  const { Component, pageProps } = props;
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
