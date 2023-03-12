import { useState } from 'react';
import Modal from './Modal';
import NewPost from './NewPost';
import Post from './Post';
import classes from './PostList.module.css';

function PostList() {
    const [modalIsVisible, setModalIsVisible] = useState(true);
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function hideModalHandler() {
        setModalIsVisible(false);
    }

    function bodyChangeHandler(e) {
        setEnteredBody(e.target.value);
    }

    function authorChangeHandler(e) {
        setEnteredAuthor(e.target.value);
    }

    return (
        <>
            {modalIsVisible ? (
                <Modal onClose={hideModalHandler}>
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
