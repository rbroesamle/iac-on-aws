import axios from "axios";
const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

export const getAllPosts = async () => {
    try {
      const { data } = await axios.get(
        `${REACT_APP_BACKEND_URL}/getallposts`);
      return data;
    } catch (error) {
      return [
        "garjfnrvlksdjbgvjsdnvlkj akf ifakljkar jrhfa shrggh asiyu rihg erh  giu hirehg urg apeiu",
        "Test2"
      ];
    }
  };
  
  export const createPost = async (text) => {
    try {
      const { data } = await axios.post(
        `${REACT_APP_BACKEND_URL}/post`,
        {
          "text": text
        }
      );
      return data;
    } catch (error) {
      return error.response.data.message;
    }
  };
  