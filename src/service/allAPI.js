import commonAPI from "./commonAPI";
import SERVER_URL from "./server";

// api call for add video
export const addVideoAPI = async (videodetails) => {
  return await commonAPI("POST", `${SERVER_URL}/allVideos`, videodetails);
};

// fetch all videos
export const getAllVideoAPI = async () => {
  return await commonAPI("GET",`${SERVER_URL}/allVideos`,"");
};

// delete video api
export const deleteVideoAPI=async(videoID)=>{
  return await commonAPI('DELETE',`${SERVER_URL}/allVideos/${videoID}`,'')
}
// save history api
export const saveHistoryAPI=async(reqBody)=>{
  return await commonAPI('POST',`${SERVER_URL}/history`,reqBody)
}
// get all history data api
export const getHistoryDataAPI=async()=>{
  return await commonAPI('GET',`${SERVER_URL}/history`,'')
}
// delete history data api
export const deleteHistoryAPI=async(videoID)=>{
  return await commonAPI('DELETE',`${SERVER_URL}/history/${videoID}`,'')
}
// api for add category
export const addCategoryAPI=async(reqBody)=>{
  return await commonAPI('POST',`${SERVER_URL}/category`,reqBody)
}
// api for get all category
export const getAllCategoryDataAPI=async()=>{
  return await commonAPI('GET',`${SERVER_URL}/category`,'')
}
// api for delete category
export const deleteCatgoryAPI=async(videoID)=>{
  return await commonAPI('DELETE',`${SERVER_URL}/category/${videoID}`,'')
}
// api for update categor (add videos)
export const updateCategoryAPI=async(id,reqBody)=>{
  return await commonAPI('PUT',`${SERVER_URL}/category/${id}`,reqBody)
}

