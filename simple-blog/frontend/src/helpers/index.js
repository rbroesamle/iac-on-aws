import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_URL || "localhost:4000";

export const getAllPosts = async () => {
    try {
      const url = `${baseUrl}/getallposts`;
      console.log(`Sending GET request to the following url: ${url}`)
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
      const url = `${baseUrl}/post`;
      console.log(`Sending POST request to the following url: ${url}`)
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
  