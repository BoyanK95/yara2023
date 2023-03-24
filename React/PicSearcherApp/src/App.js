import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar';
import { useContext } from 'react';
import { AppContext } from './context/imagesCtx';
import './App.css';

function App() {
    const { state, searchImagesHandler } = useContext(AppContext);
    const { images, loading, error } = state;

    return (
        <div className='container'>
            <SearchBar onSubmit={searchImagesHandler} />
            {loading && <p>Loading images ...</p>}
            {error && <p>{error}</p>}
            {images.length === 0 && !error && !loading && <p>No images found for the given search!</p>}
            {images.length > 0 && !error && !loading && <ImageList images={images} />}
        </div>
    );
}

export default App;
