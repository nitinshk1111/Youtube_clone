import React from "react";

const Comment = ({ comment }) => {
  return (
    <div className="my-5" key={comment.id}>
      <div className="text-sm py-2 px-5 bg-gray-300 rounded-lg">
        <div className="font-bold">{comment.name}</div>
        <div>{comment.text}</div>
      </div>
      {comment.replies.map((c) => (
        <div className="pl-6 ml-5" key={c.id}>
          <Comment comment={c} />
        </div>
      ))}
    </div>
  );
};

export default Comment;
