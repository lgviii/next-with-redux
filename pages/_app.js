import React from "react";
import App from "next/app";
import { wrapper } from "../store";
import Page from "../components/page";

const WrappedApp = ({ Component, pageProps }) => (
  <Page>
    <Component {...pageProps} />
  </Page>
);

export default wrapper.withRedux(WrappedApp);
