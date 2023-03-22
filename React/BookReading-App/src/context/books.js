import { createContext, useState } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);

    async function fetchBooks() {
        const response = await axios.get('http://localhost:3005/books');

        setBooks(response.data);
    }

    async function deleteBookHandler(id) {
        await axios.delete(`http://localhost:3005/books/${id}`);
        const updatedBooks = books.filter((book) => book.id !== id);
        setBooks(updatedBooks);
    }

    async function createBookHandler(title) {
        const response = await axios.post('http://localhost:3005/books', {
            title
        });
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

    const valueToShare = {
        books,
        deleteBookHandler,
        createBookHandler,
        editBookById,
        fetchBooks
    };

    return <BooksContext.Provider value={valueToShare}>{children}</BooksContext.Provider>;
}

export { Provider };
export default BooksContext;
