import { useSelector } from "react-redux";
import { getFavoritesBooks } from "../../redux/favoritesSlice";
import FavoritesItem from "./FevoritesItem";

const Favorites = () => {

  const favoritesAllIBooks = useSelector(getFavoritesBooks);


  return (
    <div className="favorites">
      <h2>My Favourite Books</h2>

      {favoritesAllIBooks.length === 0 ?
        (<p className="description-text body-text-16">You have no favorite books yet.</p>
        ) : (

          <ul>
            {favoritesAllIBooks.map(fav => (
              <FavoritesItem
                key={fav.id} favoritesItem={fav} />
            ))}
          </ul>
        )}
    </div>
  );
};

export default Favorites;


