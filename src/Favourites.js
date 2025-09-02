// Favourites.js
const Favourites = ({ bookList }) => {
  return (
    <div>
      <h1>Favourites</h1>
      <div className="favourites">
        <h2>My Favourite Books</h2>
        <ul>
            {/* Fix (Safe Guard) писало Cannot read properties of undefined (reading 'map') */}
          {(bookList && bookList.length > 0) ? (
            bookList.map((book) => (
              <li key={book.id}>
                {book.volumeInfo.title} by {book.volumeInfo.authors?.join(", ")}
              </li>
            ))
          ) : (
            <li>No favourite books yet</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Favourites;  
