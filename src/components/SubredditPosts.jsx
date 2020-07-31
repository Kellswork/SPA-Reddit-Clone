import React, { useEffect } from "react";

export default function SubredditPosts(props) {
    useEffect(() => {
        console.log(props);
        props.fetchPosts();
      }, [props]);

    return (
        <div>
           Sub Redit Posts 
        </div>
    )
}
// const mapStateToProps = (state) => ({
//     isFetching: state.posts.isFetching,
//     posts: state.posts.posts,
//     error: state.posts.error,
//   });

//   export default connect(mapStateToProps, {})(SubredditPosts);