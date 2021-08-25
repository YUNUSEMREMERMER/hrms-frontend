import React from "react";
import { Dropdown, DropdownItem,Image, Menu } from "semantic-ui-react";

export default function SignedIn(props) {
  return (
    <div >
      <Menu.Item>
        <Image avatar spaced="right" src="https://i4.hurimg.com/i/hurriyet/75/750x422/5c04d6230f25441c9041275b.jpg"/>
        <Dropdown pointing="top left" text="Yunus Emre">
        <Dropdown.Menu>
          <DropdownItem text="Bilgilerim" icon="info" />
          <DropdownItem onClick={props.signOut} text="Sign Out" icon="sign-out" />
        </Dropdown.Menu>

        </Dropdown>
        
      </Menu.Item>
    </div>
  );
}
