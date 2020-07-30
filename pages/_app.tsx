import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { useStore } from "../store";
import GlobalStyles from "GlobalStyles";

const theme = {
  backgroundColor: "#F9F9F9",
  textOptions: {
    color: "#212121",
  },
  h1: {
    fontSize: "45px",
  },
  h2: {
    fontSize: "40px",
  },
  h3: {
    fontSize: "35px",
    fontWeight: "500",
  },
  p: {
    opacity: "0.6",
  },
  orangeColor: "#f88030",
  hoverOrangeColor: "#FF6600",
  secondaryTextColor: "#AAAAAA",
  disabledSecondaryText: "#C4C4C4",
  separatorColor: "#DBDCDE",
  secondaryItemsBackground: "#FBFBFC",
  footerBackground: "#EFEFEF",
  containersBackground: "#FFFFFF",
  someOfOurServicesBlock: {
    backgroundColor: "#2E92DF",
  },
  blackHeader: "#212121",
  splitLineColor: "#AAAAAA",
  footerBottomColor: "#959595",
  loginFormBackground: "#EFEFEF",
  blockedButtonColor: "#AAAAAA",
  errorColor: "#FF3E3E",
};

// export default class MyApp extends App {

//   render() {
//     const { Component, pageProps } = this.props;
//     return (
//       <ThemeProvider theme={theme}>
//         <Component {...pageProps} />
//       </ThemeProvider>
//     );
//   }
// }

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
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
