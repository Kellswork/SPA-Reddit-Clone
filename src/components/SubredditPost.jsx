import React from "react";
import PropTypes from "prop-types";
import { ContentCard } from "./~styled";
import moment from "moment";
import { ReactTinyLink } from "react-tiny-link";

function kFormatter(num) {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);
}

function SubredditPost(props) {
  const postTime = moment.unix(props.post.data.created_utc).fromNow();

  return (
    <ContentCard>
      <div className="upvotes">
        <p>{kFormatter(props.post.data.ups)}</p>
      </div>
      <div className="content-right">
        <div className="card-top">
          <p className="sub-heading">
            {props.post.data.subreddit_name_prefixed}
          </p>
          <p>Posted by u/{props.post.data.author}</p>
          <p>{postTime}</p>
        </div>
        <div className="post-details">
          <h3>{props.post.data.title}</h3>
          {/* <p>{props.post.data.url}</p> */}
          <div className='link'>
          <ReactTinyLink
            cardSize="small"
            showGraphic={true}
            maxLine={2}
            minLine={1}
            url={props.post.data.url}
          />
          </div>
          
        </div>
      </div>
    </ContentCard>
  );
}

SubredditPost.propTypes = {};

export default SubredditPost;
