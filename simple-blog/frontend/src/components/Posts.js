import React, { useEffect, useState } from "react";
import "./post.css";
import Post from "./Post.js";
import { getAllPosts } from "../helpers.js/index.js";
import InfiniteScroll from "react-infinite-scroll-component";
import { PuffLoader } from "react-spinners";

function Posts() {
    const [posts, setPosts] = useState([]);
  
    console.log(posts.length);
  
    useEffect(() => {
        fetchData();
      }, []); 
    
    const fetchData = async () => {
      try {
        const data = await getAllPosts();
        console.log(data);
        setPosts(data)
      } catch (error) {
        console.log(error);
        throw error;
      }
    };
  
    return (
      <div>
        {posts && posts.length === 0 ? (
          <div className="post_loader">
            <PuffLoader color="black" />
          </div>
        ) : (
          <div className="posts_container">
            {posts.map((post, i) => {
              return <Post text={post} />;
            })}
          </div>
        )}
      </div>
    );
  }
  
  export default Posts;