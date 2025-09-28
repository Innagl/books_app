
import './App.css'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Slides from "./Components/Slides.jsx";
import SearchBar from './Components/SearchBar.jsx';
import Books from './Components/BookComponents/Books.jsx';
import { getFavoritesBooks } from './redux/favoritesSlice.jsx';
import { getBooksFounded, setBooksFounded } from './redux/booksSlice.jsx';


const HomePage = () => {
  const favoritesAllIBooks = useSelector(getFavoritesBooks)
  const dispatch = useDispatch();
  const booksFounded = useSelector(getBooksFounded);

  const [mySearch, setMySearch] = useState("");
  const [wordSubmitted, setWordSubmitted] = useState('');


  useEffect(() => {
    const getData = async () => {
      if (!wordSubmitted)
        return;
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${wordSubmitted}&maxResults=12`);
      const data = await response.json();
      console.log(data.items);

      dispatch(setBooksFounded(data.items || []));
    }
    getData();
  }, [wordSubmitted, dispatch])


  const bookSearch = (e) => {
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch)
  }


  useEffect(() => {
    localStorage.setItem("booksFounded", JSON.stringify(booksFounded));
  }, [booksFounded]);


  return (<div>
    <div className='search-books-wrapper'>
      <h1>Book <span>Finder</span></h1>
      <p className="description-text body-text-16">
        Search for your favorite books by title.
      </p>

      <SearchBar
        mySearch={mySearch}
        onInputChange={(e) => setMySearch(e.target.value)}
        onSearchSubmit={(e) => {
          e.preventDefault();
          setWordSubmitted(mySearch);
        }}
      />

      <Books booksFounded={booksFounded} />
    </div>

    <Slides />
  </div>
  );
}

export default HomePage;
































