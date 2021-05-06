import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const {id, title, body} = props.post;
    const history = useHistory()

    const showCommments = c => {
        const url =`post/${id}`;
        history.push(url)
    }

    const postStyle ={
        margin:'10px',
        padding:'20px',
        border: '1px solid gray'
    }
    return (
        <div style={postStyle}>
           <h3>{title}</h3>
           <br/>
           <p>{body}</p>
           <button onClick={() => showCommments({id})}>Show Comments</button>
        </div>
    );
};

export default Post;