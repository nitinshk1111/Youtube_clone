import { useEffect, useState } from "react";

import { YOUTUBE_SEARCH_API } from "../constants/url.const";
import { useDispatch, useSelector } from "react-redux";
import { cacheSuggestion } from "../store/suggestionSlice";

const useFetchSuggestion = (searchKey) => {
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();

  const suggestionSlector = useSelector((store) => store.suggestion);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (suggestionSlector[searchKey]) {
        setSuggestions(suggestionSlector[searchKey]);
      } else {
        getSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchKey]);

  const getSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchKey);
    const jsonData = await data.json();

    setSuggestions(jsonData[1]);

    dispatch(
      cacheSuggestion({
        [searchKey]: jsonData[1],
      })
    );
  };

  return suggestions;
};

export default useFetchSuggestion;
