import React from 'react'
import PropTypes from 'prop-types'

function SubredditPost(props) {
    console.log('sub', props.post.data.subreddit)
    return (
        <div>
            <p>{props.post.data.subreddit_name_prefixed}</p>
            <p>{props.post.data.title}</p>
            <p>{props.post.data.author}</p>
            <p>{props.post.data.created_utc}</p>
            <p>{props.post.data.ups}</p>
            <p>{props.post.data.selftext}</p>
        </div>
    )
}

SubredditPost.propTypes = {

}

export default SubredditPost

