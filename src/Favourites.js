const Favourites = ({ bookList, setBookList }) => {
  const deleteItem = (id) => {
    const newList = bookList.filter((book) => book.id !== id);
    setBookList(newList); // ✅ just update state with array
    localStorage.setItem("myBooks", JSON.stringify(newList));
  };

  return (
    <div className="favourites">
      <h2>My Favourite Books</h2>
      <ul>
        {bookList.length > 0 ? (
          bookList.map((book) => (
            <li key={book.id} className="image-content-container">
              <div className="book-info">
              <img
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt={book.volumeInfo.title}
                style={{ width: "80px", marginRight: "10px" }}
              />
              <div className="book-author">
                <h3>{book.volumeInfo.title}</h3> 
                <p className="body-text-14">{book.volumeInfo.authors?.join(", ")}</p>
              </div>
              </div>
              <button
                type="button"
                onClick={() => deleteItem(book.id)}a
                className="stroke-btn"
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <li>No favourite books yet</li>
        )}
      </ul>
    </div>
  );
};

export default Favourites;
