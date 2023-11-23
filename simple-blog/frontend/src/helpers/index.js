import axios from "axios";

const getUrl = () => {
  const BACKEND_NAME = process.env.BACKEND_NAME || "localhost";
  const BACKEND_PORT = process.env.BACKEND_PORT || 4000;
  return `http://${BACKEND_NAME}:${BACKEND_PORT}`;
};

export const getAllPosts = async () => {
    try {
      const url = `${getUrl()}/getallposts`;
      const { data } = await axios.get(url);
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
      const url = `${getUrl()}/post`;
      const { data } = await axios.post(
        url,
        {
          "text": text
        }
      );
            return data;
    } catch (error) {
      return error.response.data.message;
    }
  };
  