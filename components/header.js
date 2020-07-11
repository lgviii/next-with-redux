import Link from "next/link";
import React, { useEffect, useState } from "react";
import { isLoggedOn, logOut } from "../auth/security-checks";
import UserAvatar from "./user-avatar";

const Header = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [getUserInfo, setUserInfo] = useState(null);

  useEffect(() => {
    isLoggedOn(setIsUserLoggedIn, setUserInfo);
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
          <div
            style={{
              color: "white",
              textShadow: "0 .5rem 1rem rgba(50, 0, 100, .1)",
              marginBottom: 17,
              fontSize: "3rem",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div>NextJS with FireBase Example</div>
            {isUserLoggedIn && getUserInfo && (
              <div style={{ marginLeft: "auto", marginRight: 0 }}>
                <UserAvatar
                  name={getUserInfo.displayName}
                  imageURL={getUserInfo.photoURL}
                />
              </div>
            )}
          </div>
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
              <Link href="/counter">
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
                  Counter Page
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
                // <div>
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
