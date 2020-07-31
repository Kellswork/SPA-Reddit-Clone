import React from "react";
import { NavContainer } from "./~styled/Nav";

function Nav({ posts, handleChange, input }) {
  return (
    <NavContainer>
      <div className="search-box">
        <label htmlFor="search">
          <input
            type="text"
            name="search"
            placeholder="Search"
            value={input}
            onChange={handleChange}
          />
        </label>
      </div>
    </NavContainer>
  );
}

export default Nav;
