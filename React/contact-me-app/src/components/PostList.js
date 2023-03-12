import { useState } from 'react';
import Modal from './Modal';
import NewPost from './NewPost';
import Post from './Post';
import classes from './PostList.module.css';

function PostList({isPosting, onStopPosting}) {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(e) {
        setEnteredBody(e.target.value);
    }

    function authorChangeHandler(e) {
        setEnteredAuthor(e.target.value);
    }

    return (
        <>
            {isPosting ? (
                <Modal onClose={onStopPosting}>
                    <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
                </Modal>
            ) : null}
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author='Boyan' body='React.js is fucking AWSOME!!!' />
            </ul>
        </>
    );
}

export default PostList;
