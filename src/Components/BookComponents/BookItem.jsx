import { useSelector, useDispatch } from "react-redux";
import { addedBookToFavorites, getFavoritesBooks } from "../../redux/favoritesSlice";

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  const favoritesAllIBooks = useSelector(getFavoritesBooks);

  const isFavorite = favoritesAllIBooks.some((fav) => fav.book.id === book.id);


  return (
    <div className="book-card">
      <img className="book-image"
        src={book.volumeInfo.imageLinks?.thumbnail || "image_not_available.png"}
        alt={book.volumeInfo.title || "Untitled"}
      />
      <div className="book-author">
        <h3 className="book-founded-title">{book.volumeInfo.title || "Untitled"}</h3>
        <p className="body-text-14">{book.volumeInfo.authors?.join(", ") || "Unknown Author"}</p>
      </div>
      <button className="stroke-btn" onClick={() => dispatch(addedBookToFavorites({ book }))}
        disabled={isFavorite}
      >
        {isFavorite ? "Added" : "Add to Favorites"}
      </button>
    </div>
  );
}

export default BookItem;















// import { useSelector, useDispatch } from "react-redux";
// import { addedBookToFavorites, getFavoritesBooks } from "../../redux/favoritesSlice";

// function BookItem({ book }) {
//   const dispatch = useDispatch();
//   const favoritesAllIBooks = useSelector(getFavoritesBooks);

//   const isFavourite = favoritesAllIBooks.some((fav) => fav.bookId === book.id);

//   return (
//     <div className="container-books-founded">
//       {booksFounded.map((book) => {
//         const isFavourite = favoritesAllIBooks.some(fav => fav.bookId === book.id);

//         return (
//           <BookItem
//             key={book.id}
//             book={book}
//             image={book.volumeInfo.imageLinks?.thumbnail || "image_not_available.png"}
//             title={book.volumeInfo.title || "Untitled"}
//             author={book.volumeInfo.authors?.join(", ") || "Unknown Author"}
//             isFavourite={isFavourite}
//             onClick={() => dispatch(addedBookToFavorites({ book }))}
//           />
//         );
//       })}
//     </div>
//   );
// }

// export default BookItem;
