import { isLoggedOn } from "../auth/security-checks";
import React, { useEffect, useState } from "react";
import Page from "../components/page";

export default function Private() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [getUserInfo, setUserInfo] = useState(null);

  useEffect(() => {
    isLoggedOn(setIsUserLoggedIn, setUserInfo);
  }, []);

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
              This is the user page which contains their private info!
            </h1>
            <p
              style={{
                marginTop: "30px",
                lineHeight: "1.15",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              <b>Here's some of your user data:</b>
              {getUserInfo != null ? <img href={getUserInfo.photoURL} /> : ""}
              <p>
                <u>User Name</u>
                {": "}
                {getUserInfo != null ? getUserInfo.displayName : "null"}
              </p>
              <p>
                <u>Email</u>
                {": "} {getUserInfo != null ? getUserInfo.email : "null"}
              </p>
              <p>
                <u>User ID</u>
                {": "} {getUserInfo != null ? getUserInfo.uid : "null"}
              </p>
              <p>
                <u>Access Token</u>
                {": "}
                {getUserInfo != null ? getUserInfo.accessToken : "null"}
              </p>
            </p>
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
