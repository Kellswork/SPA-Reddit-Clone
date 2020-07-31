import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { fetchSubRedditPosts, fetchPosts } from '../actions';
import { connect } from 'react-redux';
import { MainContainer } from './~styled';
import Post from './Post';

function SubredditPosts(props) {
  const params = useParams();
  useEffect(() => {
    props.fetchPosts().then(() => {
      props.fetchSubRedditPosts(params.subReddit);
    });
  }, []);

  return (
    <div>
      <h2>{params.subReddit}</h2>
      <MainContainer>
        {props.posts
          .filter((item) => item.displaying)
          .map((post) => (
            <Post post={post} key={post.title} />
          ))}
      </MainContainer>
    </div>
  );
}
const mapStateToProps = (state) => ({
  isFetching: state.posts.isFetching,
  posts: state.posts.posts,
  error: state.posts.error,
});

export default connect(mapStateToProps, { fetchSubRedditPosts, fetchPosts })(
  SubredditPosts,
);