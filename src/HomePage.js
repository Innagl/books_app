
import './App.css'
import Slides from "./Slides";
import { useEffect, useState } from 'react';
import BooksComponent from './BooksComponent';


function HomePage({ bookList, setBookList }) {

  const [myBooks, setMyBooks] = useState(
    localStorage.getItem("myBooks") ? JSON.parse(localStorage.getItem("myBooks")) : []
  );
  const [wordSubmitted, setWordSubmitted] = useState('');
  const [mySearch, setMySearch] = useState("");

  useEffect(() => {
    const getData = async () => {

      if (!wordSubmitted)
        return;
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${wordSubmitted}&maxResults=12`);
      const data = await response.json();
      console.log(data.items);

      setMyBooks(data.items);
    }
    getData();
  }, [wordSubmitted])

  const bookSearch = (e) => {
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch)
  }

  useEffect(() => {
    localStorage.setItem("myBooks", JSON.stringify(bookList));
  }, [bookList]);

  const addItemToFavourite = (book) => {
    setBookList([...bookList, book]);
    console.log(" favorite Added:", book.volumeInfo.title);
  };


  return (<div>
    {/* {stateLoader && <LoaderPage />} */}

    <div className='search-books-wrapper'>
      <h1>Book <span>Finder</span></h1>
      <p className="description-text body-text-16" >Search for your favorite books by title.</p>

      <form onSubmit={finalSearch}>
        <input
          onChange={bookSearch}
          value={mySearch}
          placeholder="Search for books..."
        />
        <button className="filled-btn" onClick={finalSearch}>SEARCH</button>
      </form>

      <div className='container-books-founded'>
        {myBooks.map((book) => {
          const isFavourite = bookList.some((fav) => fav.id === book.id);
          return (
            <BooksComponent
              key={book.id}
              image={book.volumeInfo.imageLinks?.thumbnail || "image_not_available.png"}
              title={book.volumeInfo.title || "Untitled"}
              author={book.volumeInfo.authors?.join(", ") || "Unknown Author"}
              onAdd={() => addItemToFavourite(book)}
              isFavourite={isFavourite}
            />
          );
        })}
      </div>
    </div>

    <Slides />
  </div>
  );
}

export default HomePage;
































