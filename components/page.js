import Head from "next/head";
import Header from "../components/header";

const Page = (props) => {
  return (
    <div>
      <Head>
        <title>Auth App</title>
        <link rel="icon" href="./lock.jpg" />
      </Head>
      <Header />
      {props.children}
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Page;
