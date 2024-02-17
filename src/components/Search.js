import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilterType } from "../store/videoFilterSlice";
import useFetchSuggestion from "../utils/useFetchSuggestion";

const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const suggestions = useFetchSuggestion(searchKey);
  const dispatch = useDispatch();

  // const suggestionSlector = useSelector((store) => store.suggestion);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (suggestionSlector[searchKey]) {
  //       setSuggestions(suggestionSlector[searchKey]);
  //     } else {
  //       getSuggestion();
  //     }
  //   }, 200);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [searchKey]);

  // const getSuggestion = async () => {
  //   const data = await fetch(YOUTUBE_SEARCH_API + searchKey);
  //   const jsonData = await data.json();

  //   setSuggestions(jsonData[1]);

  //   dispatch(
  //     cacheSuggestion({
  //       [searchKey]: jsonData[1],
  //     })
  //   );
  // };

  return (
    <>
      <div className="flex">
        <input
          className="p-2 border-gray-400 border w-[500px] rounded-s-full"
          onChange={(e) => setSearchKey(e.target.value)}
          onFocus={() => setIsPanelOpen(true)}
          onBlur={() => {
            setTimeout(() => {
              setIsPanelOpen(false);
            }, 200);
          }}
        />
        <div className="py-2 px-4 border border-gray-400 rounded-e-full border-l-0">
          🔍
        </div>
      </div>
      {isPanelOpen && (
        <div className="border border-gray-300 bg-white absolute w-[500px] rounded-xl ">
          {suggestions.map((item) => (
            <div
              className="px-5 py-[6px] font-bold text-sm hover:bg-gray-200 cursor-pointer block z-20"
              key={item}
              onClick={() => {
                dispatch(
                  setFilterType({
                    searchBy: "search",
                    value: item,
                  })
                );
              }}
            >
              <span className="pr-5">🔍</span>
              {item}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Search;
