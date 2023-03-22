import { createContext, useState } from 'react';

const BooksContext = createContext();

function Provider({ children }) {
    const [count, setCount] = useState(5);

    const valueToShare = {
        count,
        IncrementCount: () => {
            setCount(count + 1);
        }
    };

    return <BooksContext.Provider>{children}</BooksContext.Provider>;
}

export default BooksContext;
