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

const LinkIcon = () => (
  <svg
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="20px"
    height="20px"
  >
    <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z" />
  </svg>
);

function SubredditPost(props) {
  const postTime = moment.unix(props.post.created_utc).fromNow();
  const urlLink = `https://www.reddit.com${props.post.permalink}`;
  return (
    <>
      <ContentCard>
        <div className="upvotes">
          <p>{kFormatter(props.post.ups)}</p>
        </div>
        <div className="content-right">
          <div className="card-top">
            <p className="sub-heading">{props.post.subreddit_name_prefixed}</p>
            <p>Posted by u/{props.post.author}</p>
            <p>{postTime}</p>
          </div>
          <div className="post-details">
            <h3>{props.post.title}</h3>
            {/* <p>{props.post.url}</p> */}
            <div className="post-link">
              <ReactTinyLink
                cardSize="small"
                showGraphic={true}
                maxLine={2}
                minLine={1}
                url={props.post.url}
              />
              <a
                className="reddit-link"
                href={urlLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                link to post
                <span>
                  <LinkIcon />
                </span>
              </a>
            </div>
          </div>
        </div>
      </ContentCard>
    </>
  );
}

SubredditPost.propTypes = {};

export default SubredditPost;
