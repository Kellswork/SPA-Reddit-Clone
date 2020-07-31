import React from "react";
import { ContentCard } from "./~styled";
import moment from "moment";
import { ReactTinyLink } from "react-tiny-link";
import { Link } from "react-router-dom";
import { LinkIcon } from '../utils/icons'

function kFormatter(num) {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);
}



function Post(props) {
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
            <p>
              <Link
                to={props.post.subreddit_name_prefixed}
                className="sub-heading"
              >
                {props.post.subreddit_name_prefixed}
              </Link>
            </p>
            <p>Posted by u/{props.post.author}</p>
            <p>{postTime}</p>
          </div>
          <div className="post-details">
            <h3>
              {props.post.title}{" "}
              <span>
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
              </span>
            </h3>
            <div className="post-link">
              <ReactTinyLink
                cardSize="small"
                showGraphic={true}
                maxLine={2}
                minLine={1}
                url={props.post.url}
              />
            </div>
          </div>
        </div>
      </ContentCard>
    </>
  );
}

export default Post;
