import { useState } from "react";
import './SearchBar.css'

function SearchBar({onSubmit}) {
  const [term, setTerm] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    onSubmit(term)
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
