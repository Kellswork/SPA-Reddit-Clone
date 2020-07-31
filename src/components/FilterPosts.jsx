import React from "react";

const FilterPosts = ({ setFilterBy }) => {
  return (
    <div style={{ marginTop: 30 }}>
      <select name="filterBy" onChange={e => setFilterBy(e.target.value)}>
        <option value="" />
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="popular">Popular</option>
      </select>
    </div>
  );
};

export default FilterPosts;
