import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchPosts, searchPosts, filterAllPosts } from "../actions";
import Post from "./Post";
import { MainContainer, LoaderContainer } from "./~styled";
import Nav from "./Nav";
import FilterPosts from "./FilterPosts";
import Loader from "react-loader-spinner";

function Posts(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayPosts, setDisplayPosts] = useState([]);
  const [filterBy, setFilterBy] = useState("");

  useEffect(() => {
    props.fetchPosts();
  }, []);

  useEffect(() => {
    console.log({ filterBy });
    if (filterBy.length > 0) {
      props.fetchPosts().then(() => props.filterAllPosts(filterBy));
    }
  }, [filterBy]);

  useEffect(() => {
    setDisplayPosts(props.posts);
  }, [props.posts]);

  useEffect(() => {
    props.searchPosts(searchTerm);
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  console.log({ displayPosts });
  return props.isFetching ? (
    <LoaderContainer>
      <Loader
        type="Circles"
        color="#061178"
        height={100}
        width={100}
        timeout={5000} //3 secs
      />
    </LoaderContainer>
  ) : (
    <>
      <Nav searchTerm={searchTerm} handleSearchChange={handleSearchChange} />

      <FilterPosts filterBy={filterBy} setFilterBy={setFilterBy} />
      <MainContainer>
        {displayPosts
          .filter((item) => item.displaying)
          .map((post) => (
            <Post post={post} key={post.title} />
          ))}
      </MainContainer>
    </>
  );
}

const mapStateToProps = (state) => ({
  isFetching: state.posts.isFetching,
  posts: state.posts.posts,
  error: state.posts.error,
});

export default connect(mapStateToProps, {
  fetchPosts,
  searchPosts,
  filterAllPosts,
})(Posts);
