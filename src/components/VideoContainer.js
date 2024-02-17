import React from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import VideoCategory from "./VideoCategory";
import useFetchVideo from "../utils/useFetchVideo";

const VideoContainer = () => {
  const list = useFetchVideo(); // custom hook

  return (
    <div>
      <VideoCategory />
      {list && list.length > 0 ? (
        <div className="flex gap-x-3 gap-y-6 flex-wrap mt-4  pt-6">
          {list.map((data) => {
            return (
              <Link
                to={{
                  pathname: "watch",
                  search: `?v=${
                    typeof data.id === "string" ? data.id : data.id.videoId
                  }`,
                  state: { data },
                }}
                key={typeof data.id === "string" ? data.id : data.id.videoId}
                state={data}
                className="w-[24%]"
              >
                <VideoCard videoData={data} />
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center mt-4  pt-6 w-full">
          No videos found
        </div>
      )}
    </div>
  );
};

export default VideoContainer;
