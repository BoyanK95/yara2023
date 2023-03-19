function BookShow({ book, onDelete }) {
  
    function deleteHandler() {
        onDelete(book.id);
    }

    return (
        <div className='book-show'>
            {book.title}
            <div className='actions'>
                <button className='delete' onClick={deleteHandler}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default BookShow;
