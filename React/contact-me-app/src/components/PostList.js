import { useEffect, useState } from 'react';
import Modal from './Modal';
import NewPost from './NewPost';
import Post from './Post';
import classes from './PostList.module.css';

function PostList({ isPosting, onStopPosting }) {
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        async function fetchPost() {
            try {
                setIsFetching(true);
                const responce = await fetch('http://localhost:8080/posts');
                const resData = await responce.json();
                if (!resData) {
                    setHasError(true);
                    setIsFetching(false);
                }
                setPosts(resData.posts);
                setIsFetching(false);
            } catch (error) {
                setIsFetching(false);
                setHasError(true);
                console.log(error);
            }
        }
        fetchPost();
    }, []);

    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
                </Modal>
            )}
            {!hasError && !isFetching && posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => (
                        <Post key={post.key} author={post.author} body={post.body} />
                    ))}
                </ul>
            )}
            {!hasError && !isFetching && posts.length === 0 && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
            {!hasError && isFetching && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <p>Loading posts...</p>
                </div>
            )}
            {hasError && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <p>Opps, an Error has occurred!</p>
                </div>
            )}
        </>
    );
}

export default PostList;
