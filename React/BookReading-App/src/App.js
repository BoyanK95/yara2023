import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {
    const [books, setBooks] = useState([]);

    function createBookHandler(title) {
        const updatedBooks = [...books, { id: Math.random(), title }];
        setBooks(updatedBooks);
    }

    return (
        <div>
            <BookCreate onCreate={createBookHandler} />{books.length}
        </div>
    );
}

export default App;
