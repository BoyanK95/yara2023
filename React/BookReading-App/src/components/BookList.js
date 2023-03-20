import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {

    return <div className="book-list">{books.map(book => <BookShow onEdit={onEdit} key={book.id} book={book} onDelete={onDelete}/>)}</div>;
}

export default BookList;
