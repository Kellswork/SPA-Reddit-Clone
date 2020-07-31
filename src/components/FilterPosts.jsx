import React from "react";

const FilterPosts = ({ setFilterBy }) => {
  return (
    <div>
      <p>Sort by</p>
      <select name="filterBy" onChange={e => setFilterBy(e.target.value)}>
        <option value="" />
        <option selected="selected" value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="popular">Popular</option>
      </select>
    </div>
  );
};

export default FilterPosts;
