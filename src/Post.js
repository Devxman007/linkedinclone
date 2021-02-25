import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import InputOptions from "./InputOptions";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";
import "./Post.css";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOptions Icon={ThumbUpAltIcon} title="Like" color="gray" />
        <InputOptions Icon={CommentIcon} title="Comment" color="gray" />
        <InputOptions Icon={ShareIcon} title="Share" color="gray" />
        <InputOptions Icon={SendIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
