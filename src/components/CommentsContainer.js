import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import { commentsData } from "../utils/comments_json";

const CommentsContainer = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetchAllComments();
  }, []);

  const fetchAllComments = () => {
    setComments(commentsData);
  };
  return comments.map((comment) => (
    <Comment comment={comment} key={comment.id} />
  ));
};

export default CommentsContainer;
