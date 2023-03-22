import { useContext } from "react";
import { useState } from "react";
import BooksContext from "../context/books";

function BookEdit({book, onSubmit}) {
  const [title, setTitle] = useState(book.title)
  const { editBookById } = useContext(BooksContext)

  function titleChangeHandler(e) {
    setTitle(e.target.value)
  }

  function submitHandler(e) {
    e.preventDefault()

    editBookById(book.id, title)
  }

    return (
        <form className='book-edit' onSubmit={submitHandler}>
            <label>Title</label>
            <input className='input' value={title} onChange={titleChangeHandler}/>
            <button className='button is-primary'>Save</button>
        </form>
    );
}

export default BookEdit;
