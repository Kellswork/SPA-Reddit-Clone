import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import SubredditPost from "./SubredditPost";
import { MainContainer } from "./~styled";
import Nav from "./Nav";

function Posts(props) {
  const [input, updateInput] = useState("");

  useEffect(() => {
    props.fetchPosts();
  }, []);

  const handleChange = (event) => {
    updateInput({ input: event.target.value });
  };

  return (
    <>
      <Nav input={input} handleChange={handleChange} />
      <MainContainer>
        {props.posts.map((post) => (
          <SubredditPost post={post} key={post.data.title} />
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
