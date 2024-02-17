import { useEffect, useState } from "react";
import { VIDEO_SEARCH_URL, VIDEO_URL } from "../constants/url.const";
import { useSelector } from "react-redux";

const useFetchVideo = () => {
  const [list, setList] = useState([]);
  const videoFilter = useSelector((store) => store.videoFilter);

  useEffect(() => {
    const fetchVideos = async () => {
      let url = VIDEO_URL;
      if (videoFilter.filter) {
        url =
          videoFilter.filter.searchBy === "category"
            ? `${VIDEO_URL}&videoCategoryId=${videoFilter.filter.value}`
            : `${VIDEO_SEARCH_URL}&q=${videoFilter.filter.value}`;
      }
      const data = await fetch(url);
      const jsonData = await data.json();
      setList(jsonData.items);
    };
    fetchVideos();
  }, [videoFilter]);
  return list;
};

export default useFetchVideo;
