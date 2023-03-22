import { useContext, useState } from 'react';
import BooksContext from '../context/books';

function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('');
    const { createBookHandler } = useContext(BooksContext);

    function handleChange(e) {
        setTitle(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        createBookHandler(title);
        setTitle('');
    }

    return (
        <div className='book-create'>
            <h1>Add a Book</h1>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className='input' value={title} onChange={handleChange} />
                <button className='button'>Create!</button>
            </form>
        </div>
    );
}

export default BookCreate;
