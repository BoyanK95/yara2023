import { useEffect, useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

function App() {
    const [books, setBooks] = useState([]);

    async function fetchBooks() {
      const response = await axios.get('http://localhost:3005/books')

      setBooks(response.data)
    }

    useEffect(() => {
      fetchBooks()
    }, [])

    function deleteBookHandler(id) {
        const updatedBooks = books.filter((book) => book.id !== id);
        setBooks(updatedBooks);
    }

    async function createBookHandler(title) {
        const response = await axios.post('http://localhost:3005/books', {
            title
        });

        console.log(response);
        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
    }

    function editBookById(id, newTitle) {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, title: newTitle };
            }
            return book;
        });

        setBooks(updatedBooks);
    }

    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookList onEdit={editBookById} books={books} onDelete={deleteBookHandler} />
            <BookCreate onCreate={createBookHandler} />
        </div>
    );
}

export default App;
