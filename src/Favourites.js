// Favourites.js
const Favourites = ({ bookList }) => {
  return (
    <div>
      <div className="favourites">
        <h2>My Favourite Books</h2>
        <ul>
          {/* Fix (Safe Guard) писало Cannot read properties of undefined (reading 'map') */}
          {(bookList && bookList.length > 0) ? (
            bookList.map((book) => (
              <li key={book.id} className="image-content-container">
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail}
                  alt={book.volumeInfo.title}
                  style={{ width: "80px", marginRight: "10px" }}
                />

                <div className="book-author">
                  <h3>
                    {book.volumeInfo.title} </h3>
                  <p>{book.volumeInfo.authors?.join(", ")}
                  </p>
                </div>

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
