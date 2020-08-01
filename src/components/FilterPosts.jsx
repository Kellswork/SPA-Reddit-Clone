import React from "react";

const FilterPosts = ({ setFilterBy, filterBy }) => {
  return (
    <div>
      <p>Sort by</p>
      <select name="filterBy" value={filterBy} onChange={e => setFilterBy(e.target.value)}>
      <option defaultValue=""></option>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="popular">Popular</option>
      </select>
    </div>
  );
};

export default FilterPosts;
