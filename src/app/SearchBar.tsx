import React from 'react';

const SearchBar = ({ query, setQuery }) => {
    return (
        <div className="search-bar">
            <input
            type="text"
            placeholder="search users"
            value={query}
            onChange={(e)} => setQuery(e.target.value)
            />
            </div>
    )
}


export default SearchBar;