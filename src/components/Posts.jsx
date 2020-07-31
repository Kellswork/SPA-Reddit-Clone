import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import SubredditPost from "./SubredditPost";
import { MainContainer } from "./~styled";
import Nav from "./Nav";

function Posts(props) {
  useEffect(() => {
    props.fetchPosts();
  }, []);
  return (
    <>
      <Nav />
      <MainContainer>
        {props.posts.map((post) => (
          <SubredditPost post={post} />
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

export default connect(mapStateToProps, { fetchPosts })(Posts);
