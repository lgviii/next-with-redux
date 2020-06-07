import React from "react";
import App from "next/app";
import { wrapper } from "../store";

class WrappedApp extends App {
  getInitialProps = async ({ Component, ctx }) => {
    ctx.store.dispatch({ type: "APP", payload: "was set in _app" });

    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
        appProp: ctx.pathname,
      },
    };
  };

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default wrapper.withRedux(WrappedApp);
