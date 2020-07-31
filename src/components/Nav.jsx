import React, { useState } from "react";
import { NavContainer } from "./~styled/Nav";
import { connect } from "react-redux";


function Nav({ posts }) {
  const [input, updateInput] = useState("");

  const handleChange = (event) => {
    updateInput({ input: event.target.value });
  };

  return (
    <NavContainer>
      <div className="search-box">
        <label htmlFor="search">
          <input
            type="text"
            name="search"
            placeholder="Search"
            onChange={handleChange}
          />
        </label>
      </div>
    </NavContainer>
  );
}
const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps, {})(Nav);
