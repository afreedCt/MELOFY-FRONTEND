import commonAPI from "./commonAPI";
import SERVER_URL from "./server";

// api call for add video
export const addVideoAPI = async (videodetails) => {
  return await commonAPI("POST", `${SERVER_URL}/allVideos`, videodetails);
};

// fetch all videos
export const getAllVideoAPI = async () => {
  return await commonAPI("GET", `${SERVER_URL}/allVideos`, "");
};

// 
