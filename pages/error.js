import React from "react";
import Link from "next/link";
// import { useSelector } from "react-redux";
// import { LOAD } from "../pagesWithStores/admin/actions";
// import { wrapper } from "../store";

// const getStaticProps = wrapper.getStaticProps(({ store }) => {
//   store.dispatch({ type: LOAD, payload: "admin" });
//   return { props: { getStaticProp: "bar" } };
// });

let Error = () => {
  // const app = useSelector((state) => state.app);
  return (
    <>
      <p>
        {/* This is an error page, it also has access to store: <code>{app}</code> */}
      </p>
      <nav>
        <Link href="/">
          <a>Navigate to index</a>
          <button
          // onclick={() => getStaticProps}
          >
            Click to get admin info...
          </button>
        </Link>
      </nav>
    </>
  );
};

export default Error;
