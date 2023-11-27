import axios from "axios";

const getUrl = () => {
  return process.env.BACKEND_URL || "https://hq5h2xmv8c.execute-api.eu-west-1.amazonaws.com/dev";
};

export const getAllPosts = async () => {
    try {
      const url = `${getUrl()}/getallposts`;
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
      const url = `${getUrl()}/post`;
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
  