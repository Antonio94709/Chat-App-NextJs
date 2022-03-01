import React, { useContext } from "react";

import { Context } from "../Context";

import { useRouter } from "next/dist/client/router";

import axios from "axios";

export default function Auth() {
  const { username, setUsername, secret, setSecret } = useContext(Context);
  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => e.preventDefault}>
          <div className="auth-title">Next Js chats</div>
          <div className="input-container">
            <input
              placeholder="Email"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">
            Login /Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
