import { useDispatch } from "react-redux";
import { removeBookFromFavorites } from "../../redux/favoritesSlice";


const FavoritesItem = ({ favoritesItem }) => {

  // const bookFounded = books.find(item => item.id === favoritesItem.bookId)
  const dispatch = useDispatch();
  const book = favoritesItem.book;


  

  return (
    <div>
      <li key={book.id} className="favorite-card">
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
          onClick={() => dispatch(removeBookFromFavorites({favoriteBookId: favoritesItem.id }))}
          className="stroke-btn"
        >
          Delete
        </button>
      </li>
    </div>
  )
}

export default FavoritesItem;
