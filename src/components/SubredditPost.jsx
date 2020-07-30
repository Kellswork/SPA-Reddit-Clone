import React from 'react'
import PropTypes from 'prop-types'

function SubredditPost(props) {
    console.log(props)
    return (
        <div>
            <p>{props.subreddit}</p>
            <h1>{props.title}</h1>
        </div>
    )
}

SubredditPost.propTypes = {

}

export default SubredditPost

