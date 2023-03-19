import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
    const [books, setBooks] = useState([]);

    function deleteBookHandler(id) {
        const updatedBooks = books.filter((book) => book.id !== id);
        setBooks(updatedBooks)
    }

    function createBookHandler(title) {
        const updatedBooks = [...books, { id: Math.round(Math.random() * 10000), title }];
        setBooks(updatedBooks);
    }

    return (
        <div className='app'>
            <BookList books={books} onDelete={deleteBookHandler}/>
            <BookCreate onCreate={createBookHandler} />
        </div>
    );
}

export default App;
