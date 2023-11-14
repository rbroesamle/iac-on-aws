import React from "react";
import "./post.css"

function Post({ text }) {
    return <div className="post">
        {text}
    </div>
}

export default Post;