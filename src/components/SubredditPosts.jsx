import React, { useEffect } from 'react';
import Nav from './Nav'

import { useParams } from 'react-router-dom';
import { fetchSubRedditPosts, fetchPosts } from '../actions';
import { connect } from 'react-redux';
import {  SubContainer } from './~styled';
import Post from './Post';

function SubredditPosts(props) {
  const params = useParams();
  useEffect(() => {
    props.fetchPosts().then(() => {
      props.fetchSubRedditPosts(params.subReddit);
    });
  }, []);

  return (
    <SubContainer >
        <Nav />
        <h2>{params.subReddit}</h2>
      <div>
        {props.posts
          .filter((item) => item.displaying)
          .map((post) => (
            <Post post={post} key={post.title} />
          ))}
      </div>
    </SubContainer>
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