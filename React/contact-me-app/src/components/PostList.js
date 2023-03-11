import Post from './Post';
import classes from './PostList.module.css'

function PostList() {
    return (
        <ul className={classes.posts}>
            <Post author='Boyan' body='React.js is fucking AWSOME!!!' />
            <Post author='Boyan' body='React.js is fucking AWSOME!!!' />
        </ul>
    );
}

export default PostList;
