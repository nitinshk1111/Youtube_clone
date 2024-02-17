import React from "react";

const VideoCard = ({ videoData }) => {
  const { thumbnails, title, channelTitle } = videoData.snippet;
  const { statistics } = videoData;
  return (
    <div>
      <img src={thumbnails.high.url} alt="videoCard" className="rounded-lg" />
      <div className="flex p-2">
        <div className="w-12 pr-10"> 🍀 </div>
        <div>
          <div className="font-bold line-clamp-2">{title} </div>
          <div className="text-sm text-slate-700 font-bold mt-3">
            <div>{channelTitle}</div>
            {statistics && (
              <div className="text-sm">
                {Math.ceil(statistics.viewCount / 1000000)}M views
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
