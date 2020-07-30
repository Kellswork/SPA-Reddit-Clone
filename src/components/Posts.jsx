import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import SubredditPost from './SubredditPost'

function Posts(props) {
  useEffect(() => {
    props.fetchPosts();
  }, []);

  console.log('Posts-->', props);

return <div>{props.posts.map((post) => <SubredditPost post={post} /> )}</div>;
}

const mapStateToProps = (state) => ({
  isFetching: state.posts.isFetching,
  posts: state.posts.posts,
  error: state.posts.error,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);