import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {  Container, Menu } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory()

  function handleSignOut() {
    setIsAuthenticated(false)
    history.push("/candidates")
  }

  function handleSignIn() {
    setIsAuthenticated(true)
  }
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
          {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}
          
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
