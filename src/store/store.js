import { configureStore } from "@reduxjs/toolkit";
import suggestionSlice from "./suggestionSlice";
import appSLice from "./appSLice";
import videoFilterSlice from "./videoFilterSlice";

const store = configureStore({
  reducer: {
    suggestion: suggestionSlice,
    app: appSLice,
    videoFilter: videoFilterSlice,
  },
});

export default store;
