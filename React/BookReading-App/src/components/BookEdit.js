import { useState } from "react";

function BookEdit({book}) {
  const [title, setTitle] = useState(book.title)

  function titleChangeHandler(e) {
    setTitle(e.target.value)
  }

  function submitHandler(e) {
    e.preventDefault()
    console.log(`New title`, title);
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
