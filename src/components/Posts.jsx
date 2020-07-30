import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import SubredditPost from './SubredditPost'


function Posts(props) {
  useEffect(() => {
    props.fetchPosts();
    console.log('posts', props.posts)
    //  console.log('posts', props.fetchPosts())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('posts', props.posts)
  return <div>
      {/* {props.posts.map((post) => <SubredditPost post={post} /> )} */}
  </div>;
}

const mapStateToProps = state => {
  console.log('mapstatetoprops', state);
  return {
   isFetching: state.isFetching,
   posts: state.posts,
   error: state.error
};
}


export default connect(mapStateToProps, {fetchPosts})(Posts)