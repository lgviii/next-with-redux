import Link from "next/link";
import React, { useEffect, useState } from "react";
import { isLoggedOn, logOut } from "../auth/security-checks";
import * as firebase from "../auth/firebase-auth";
// import "../css/Header.css";

const Header = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    isLoggedOn(setIsUserLoggedIn);
  }, []);

  return (
    <div>
      <div
        style={{
          background: "linear-gradient(19deg, #21D4FD, #00c469)",
          padding: "40px",
        }}
      >
        <div>
          <span
            style={{
              color: "white",
              textShadow: "0 .5rem 1rem rgba(50, 0, 100, .1)",
              margin: 0,
              fontSize: "3rem",
            }}
          >
            NextJS with FireBase Example
          </span>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Link href="/">
              <button
                style={{
                  padding: "1.5rem 2rem",
                  border: 0,
                  color: "#08AEEA",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  background: "white",
                  borderRadius: "3px",
                  transition: "all .2s",
                  cursor: "pointer",
                  boxShadow: "0 1.75rem 2rem -.4rem rgba(50, 0, 100, .15)",
                  marginLeft: "20px",
                }}
              >
                Home
              </button>
            </Link>
            <Link href="/user-info">
              <button
                style={{
                  padding: "1.5rem 2rem",
                  border: 0,
                  color: "#08AEEA",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  background: "white",
                  borderRadius: "3px",
                  transition: "all .2s",
                  cursor: "pointer",
                  boxShadow: "0 1.75rem 2rem -.4rem rgba(50, 0, 100, .15)",
                  marginLeft: "20px",
                }}
              >
                A Private Page
              </button>
            </Link>
            {isUserLoggedIn && (
              <Link href="/admin">
                <button
                  style={{
                    padding: "1.5rem 2rem",
                    border: 0,
                    color: "#08AEEA",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    background: "white",
                    borderRadius: "3px",
                    transition: "all .2s",
                    cursor: "pointer",
                    boxShadow: "0 1.75rem 2rem -.4rem rgba(50, 0, 100, .15)",
                    marginLeft: "20px",
                  }}
                >
                  Admin Page (You can only see this when logged in...)
                </button>
              </Link>
            )}
            <div
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                width: "200px",
                justifyContent: "center",
              }}
            >
              {isUserLoggedIn ? (
                <Link href="/">
                  <button
                    onClick={() => {
                      logOut();
                    }}
                    style={{
                      padding: "1.5rem 2rem",
                      border: 0,
                      color: "blue",
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      background: "lightgrey",
                      borderRadius: "45px",
                      transition: "all .2s",
                      cursor: "pointer",
                      boxShadow: "0 1.75rem 2rem -.4rem rgba(50, 0, 100, .15)",
                      marginLeft: "20px",
                    }}
                  >
                    log out
                  </button>
                </Link>
              ) : (
                <Link href="/login">
                  <button
                    style={{
                      padding: "1.5rem 2rem",
                      border: 0,
                      color: "blue",
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      background: "lightgrey",
                      borderRadius: "45px",
                      transition: "all .2s",
                      cursor: "pointer",
                      boxShadow: "0 1.75rem 2rem -.4rem rgba(50, 0, 100, .15)",
                      marginLeft: "20px",
                    }}
                  >
                    log in
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
