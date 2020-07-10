import { isLoggedOn } from "../auth/security-checks";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { loadData, incrementCounter } from "../pagesWithStores/counter/actions";
import Loading from "../components/loading";

export default function Counter() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const counterValue = useSelector((state) => state.counter.counterValue);
  const isLoadingValue = useSelector((state) => state.counter.isPageLoading);

  useEffect(() => {
    isLoggedOn(setIsUserLoggedIn);
    loadData();
  }, []);

  return (
    <div>
      <Loading isLoading={isLoadingValue} />
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
            Here is the counter for this user.
          </h1>
          <p
            style={{
              marginTop: "30px",
              lineHeight: "1.15",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            Your current counter value is{" "}
            <b
              style={{
                padding: "1.5rem 2rem",
                border: 0,
                color: "#08AEEA",
                fontSize: "1.2rem",
                fontWeight: "bold",
                borderRadius: "3px",
                transition: "all .2s",
                cursor: "pointer",
                boxShadow: "0 1.75rem 2rem -.4rem rgba(50, 0, 100, .15)",
              }}
            >
              {counterValue}
            </b>
          </p>
          <div
            style={{
              marginTop: "30px",
              lineHeight: "1.15",
              fontSize: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              style={{
                padding: "1.5rem 2rem",
                border: 0,
                color: "white",
                fontSize: "1.2rem",
                fontWeight: "bold",
                background: "#9d9d9d",
                borderRadius: "3px",
                transition: "all .2s",
                cursor: "pointer",
                boxShadow: "0 1.75rem 2rem -.4rem rgba(50, 0, 100, .15)",
                marginLeft: "20px",
              }}
              onClick={() => incrementCounter()}
            >
              Click to increment the counter.
            </button>
          </div>
          {/*<button onClick={() => loadData("stuff")}>Do API Call</button> */}
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
            Log in to see this page.
          </h1>
        </div>
      )}
    </div>
  );
}
