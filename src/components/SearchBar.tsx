import React from 'react';

export function SearchBar(): JSX.Element {
  return (
    <form action="#" className="search">
      <input type="text" className="search-term" placeholder="Search..."></input>
      <button type="submit" className="search-button">
        <div className="search-icon"></div>
      </button>
    </form>
  );
}
