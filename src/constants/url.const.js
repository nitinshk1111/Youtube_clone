export const API_KEY = "AIzaSyBZPCEGKMMKsOzIoCONowEiBX6AK5O6JV4";

export const VIDEO_CATEGORY_URL =
  "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=" +
  API_KEY;

export const VIDEO_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q=";

export const VIDEO_SEARCH_URL =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;
