import { isLoggedOn } from "../auth/security-checks";
import React, { useEffect, useState } from "react";
import Page from "../components/page";
import { useSelector } from "react-redux";
import { LOAD, loadData } from "../pagesWithStores/admin/actions";
import { wrapper } from "../store";

export default function Admin() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const app = useSelector((state) => state.admin.app);

  useEffect(() => {
    isLoggedOn(setIsUserLoggedIn);
  }, []);

  const getStaticProps = wrapper.getStaticProps(({ store }) => {
    store.dispatch({ type: LOAD, payload: "admin" });
  });

  const callApiWrapped = wrapper.getStaticProps(({ store }) => {
    loadData(store.dispatch, "stuff");
  });

  return (
    <Page>
      <div>
        {isUserLoggedIn && (
          <div>
            <h1
              style={{
                marginTop: "30px",
                lineHeight: "1.15",
                fontSize: "40px",
                textAlign: "center",
              }}
            >
              Secret admin stuff!
            </h1>
            <p
              style={{
                marginTop: "30px",
                lineHeight: "1.15",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              You are logged on so you can see all the admin secrets! App: {app}
            </p>
            <button onClick={() => getStaticProps()}>
              Click to get updated info.
            </button>
            <button onClick={() => callApiWrapped()}>Do API Call</button>
          </div>
        )}
        {isUserLoggedIn == false && (
          <div>
            <h1
              style={{
                marginTop: "30px",
                lineHeight: "1.15",
                fontSize: "40px",
                textAlign: "center",
              }}
            >
              This is a private page!
            </h1>
            <p
              style={{
                marginTop: "30px",
                lineHeight: "1.15",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              Go log in or you can't see this info!
            </p>
          </div>
        )}
      </div>
    </Page>
  );
}
