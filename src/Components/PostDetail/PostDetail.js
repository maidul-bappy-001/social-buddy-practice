import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comments from '../Comments/Comments';

const PostDetail = () => {
    const {PostId} = useParams();
    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${PostId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
       
    }, [PostId])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments`
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
       
    }, [])

    return (
        <div>
            <h1>User Id: {post.id}</h1>
            <h3>Title: {post.title}</h3>
            <p>Post body: {post.body} </p>
            <p>Number of comments: {comments.length} </p>
            {
                comments.map(cm => <Comments comment={cm}></Comments> )
            }
        </div>
    );
};

export default PostDetail;