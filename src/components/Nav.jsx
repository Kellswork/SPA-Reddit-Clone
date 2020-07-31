import React from "react";
import { NavContainer } from "./~styled/Nav";

const UserIcon = () => (
  <svg
    width="18"
    height="17"
    viewBox="0 0 18 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.00003 4C5.00003 6.20914 6.79089 8 9.00003 8C11.2092 8 13 6.20914 13 4C13 1.79086 11.2092 0 9.00003 0C6.79089 0 5.00003 1.79086 5.00003 4ZM5.00003 10C3.14203 10 1.52073 11.0134 0.658752 12.5177C2.44917 15.2189 5.5166 17 9.00003 17C12.4835 17 15.5509 15.2189 17.3413 12.5177C16.4793 11.0134 14.858 10 13 10H5.00003Z"
      fill="#0D2B3E"
    />
  </svg>
);

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
