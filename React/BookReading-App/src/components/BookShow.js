import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, onDelete }) {
    const [showEdit, setShowEdit] = useState(false);

    function deleteHandler() {
        onDelete(book.id);
    }
    function toggleEdit() {
        setShowEdit(!showEdit);
    }

    return (
        <div className='book-show'>
            <div>{showEdit ? <BookEdit /> : <h3>{book.title}</h3>}</div>
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
