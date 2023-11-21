import React, { useState } from "react";
import './comment.css';
import { createPost } from "../helpers/index.js";


function Comment({isDisabled}) {
    const [text, setText] = useState("");

    const handleChange = async (e) => {
        const { name, value } = e.target;
        setText(value);
    }

    const handleSubmit = async (e) => {
        await createPost(text)
        window.location.reload(false);
    };

    return <div className='comment'>
        <div className='textAbove'>{"Write a new comment:"}</div>
        <textarea
            type="text"
            className="input"
            value={text}
            onChange={handleChange}
            name="title">
        </textarea>
        <button
            type="submit"
            value="submit"
            disabled={isDisabled}
            onClick={handleSubmit}
            className="submit">
                {"Post"}
        </button>
    </div>
}

export default Comment;