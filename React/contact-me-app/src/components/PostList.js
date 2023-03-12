import Modal from './Modal';
import NewPost from './NewPost';
import Post from './Post';
import classes from './PostList.module.css';

function PostList({ isPosting, onStopPosting }) {

    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost onCancel={onStopPosting}/>
                </Modal>
            )}
            <ul className={classes.posts}>
                <Post author='Boyan' body='React.js is fucking AWSOME!!!' />
            </ul>
        </>
    );
}

export default PostList;
