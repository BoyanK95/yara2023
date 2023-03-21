import { useEffect, useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

function App() {
    const [books, setBooks] = useState([]);

    async function fetchBooks() {
        const response = await axios.get('http://localhost:3005/books');

        setBooks(response.data);
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    async function deleteBookHandler(id) {
        await axios.delete(`http://localhost:3005/books/${id}`);
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

    async function editBookById(id, newTitle) {
        const response = await axios.put(`http://localhost:3005/books/${id}`, {
            title: newTitle
        });

        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data };
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
