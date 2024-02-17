import React, { useState, useEffect } from "react";
import { VIDEO_CATEGORY_URL } from "../constants/url.const";
import { useDispatch } from "react-redux";
import { setFilterType } from "../store/videoFilterSlice";

const VideoCategory = () => {
  const [category, setCategory] = useState([]);
  const [currentId, setCurrentId] = useState([]);

  useEffect(() => {
    fetchVideoCategory();
  }, []);

  const dispatch = useDispatch();

  const fetchVideoCategory = async () => {
    const data = await fetch(VIDEO_CATEGORY_URL);
    const jsonData = await data.json();
    setCategory(jsonData.items.splice(0, 10));
  };

  return (
    <div className="flex gap-2 flex-wrap bg-white top-[60px] fixed pb-5 w-full">
      {category.map((cat) => {
        return (
          <button
            className={
              "border border-gray-300 bg-gray-100 rounded-lg p-2 text-sm " +
              (cat.id === currentId && "bg-gray-500")
            }
            key={cat.id}
            onClick={() => {
              setCurrentId(cat.id);
              dispatch(
                setFilterType({
                  searchBy: "category",
                  value: cat.id,
                })
              );
            }}
          >
            {cat.snippet.title}
          </button>
        );
      })}
    </div>
  );
};

export default VideoCategory;
