import { useContext, useState } from 'react'
import { AppContext } from '../context/imagesCtx';
import './SearchBar.css'

function SearchBar() {
  const [term, setTerm] = useState('');
  const { searchImagesHandler } = useContext(AppContext);

  const handleFormSubmit = (e) => {
    e.preventDefault()
    searchImagesHandler(term)
  }

  function inputChangeHandler(e) {
    setTerm(e.target.value)
  }

    return (
        <div className="search-bar">
          <form onSubmit={handleFormSubmit}>
            <label>Enter Search Term</label>
            <input value={term} onChange={inputChangeHandler}/>
          </form>
        </div>
    );
}

export default SearchBar;
