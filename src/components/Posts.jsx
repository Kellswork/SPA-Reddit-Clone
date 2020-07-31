import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchPosts, searchPosts } from "../actions";
import SubredditPost from "./SubredditPost";
import { MainContainer } from "./~styled";
import Nav from "./Nav";

function Posts(props) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    props.fetchPosts();
  }, []);

  useEffect(() => {
    props.searchPosts(searchTerm);
  }, [searchTerm]);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Nav searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <MainContainer>
        {props.posts
          .filter(item => item.displaying)
          .map(post => (
            <SubredditPost post={post} key={post.title} />
          ))}
      </MainContainer>
    </>
  );
}

const mapStateToProps = state => ({
  isFetching: state.posts.isFetching,
  posts: state.posts.posts,
  error: state.posts.error
});

export default connect(
  mapStateToProps,
  { fetchPosts, searchPosts }
)(Posts);
