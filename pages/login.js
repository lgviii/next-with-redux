import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { logOut } from "../auth/security-checks";

const AuthUI = dynamic(() => import("../components/auth-ui"), {
  ssr: false,
});

export default function Login() {
  useEffect(() => {
    logOut();
  }, []);

  return (
    <div>
      <link
        type="text/css"
        rel="stylesheet"
        href="https://www.gstatic.com/firebasejs/ui/4.5.0/firebase-ui-auth.css"
      />
      <h1
        style={{
          marginTop: "30px",
          lineHeight: "1.15",
          fontSize: "30px",
          textAlign: "center",
        }}
      >
        Log in here...
      </h1>
      <AuthUI />
    </div>
  );
}
