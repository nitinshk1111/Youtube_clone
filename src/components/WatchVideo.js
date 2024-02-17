import React, { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentsContainer";
import { useDispatch } from "react-redux";
import { closeMenu } from "../store/appSLice";

const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  const data = useLocation();
  const { title, channelTitle } = data.state.snippet;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col">
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="font-bold text-xl my-4">{title}</div>
      <div className="font-bold text-sm">{channelTitle}</div>
      <div>
        <CommentContainer />
      </div>
    </div>
  );
};

export default WatchVideo;
