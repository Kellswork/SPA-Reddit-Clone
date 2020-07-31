import React from "react";
import { NavContainer } from "./~styled/Nav";



function Nav({ handleSearchChange, searchTerm }) {
  return (
    <NavContainer>
      <div className="search-box">
        <label htmlFor="search">
          <input
            type="text"
            name="search"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </label>
      </div>
    </NavContainer>
  );
}

export default Nav;
