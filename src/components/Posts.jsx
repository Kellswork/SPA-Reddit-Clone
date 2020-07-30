import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import { bindActionCreators } from 'redux';
import {
  fetchedPosts,
  fetchPostsError,
  isFetchingPosts,
} from "../reducers/simpleReducers";

function Posts() {
  useEffect(() => {
    fetchPosts();
    console.log(fetchedPosts())
  }, []);
  return <div>hello</div>;
}

const mapStateToProps = state => ({
//    isFetching: isFetchingPosts(state),
   posts: state.posts,
//    error: fetchPostsError(state)
})

// const mapDispatchToProps = dispatch => bindActionCreators({
//     fetchPosts: fetchPosts(),
// }, dispatch)
// export default Posts;
export default connect(mapStateToProps, {fetchPosts})(Posts)