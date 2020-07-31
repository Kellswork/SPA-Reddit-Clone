import React from "react";
import { NavContainer } from "./~styled/Nav";

export default function Nav() {
  return (
    <NavContainer>
      <div className="search-box">
        <label htmlFor="search">
          <input type="text"  placeholder='Search'/>
        </label>
      </div>
    </NavContainer>
  );
}
