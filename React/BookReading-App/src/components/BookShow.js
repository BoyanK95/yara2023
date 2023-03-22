import { useContext } from 'react';
import { useState } from 'react';
import BooksContext from '../context/books';
import BookEdit from './BookEdit';

function BookShow({ book }) {
    const [showEdit, setShowEdit] = useState(false);
    const { deleteBookHandler } = useContext(BooksContext);

    function deleteHandler() {
        deleteBookHandler(book.id);
    }

    function toggleEdit() {
        setShowEdit(!showEdit);
    }

    function handleSubmit(id, newTitle) {
        setShowEdit(false);
    }

    return (
        <div className='book-show'>
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt='books' />
            <div>{showEdit ? <BookEdit onSubmit={handleSubmit} book={book} /> : <h3>{book.title}</h3>}</div>
            <div className='actions'>
                <button className='edit' onClick={toggleEdit}>
                    Edit
                </button>
                <button className='delete' onClick={deleteHandler}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default BookShow;
