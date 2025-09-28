const SearchBar = ({ mySearch, onInputChange, onSearchSubmit }) => {
  return (
    <form onSubmit={onSearchSubmit}>
      <input
        onChange={onInputChange}
        value={mySearch}
        placeholder="Search for books..."
      />
      <button className="filled-btn" type="submit">SEARCH</button>
    </form>
  );
}

export default SearchBar;
