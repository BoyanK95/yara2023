import { useState } from "react";

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
        <div>
          <form onSubmit={handleFormSubmit}>
            <input value={term} onChange={inputChangeHandler}/>
          </form>
        </div>
    );
}

export default SearchBar;
