
import './App.css'
import Slides from "./Slides";
import { useEffect, useState } from 'react';
import BooksComponent from './BooksComponent';


function HomePage(bookList, setBookList) {

  const [myBooks, setMyBooks] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('');
  const [mySearch, setMySearch] = useState("");

  // const [stateLoader, setStateLoader] = useState(false);

  useEffect(() => {
    const getData = async () => {

      if (!wordSubmitted)
        return;

      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${wordSubmitted}&maxResults=12`);
      const data = await response.json();
      console.log(data.items);


      //   if (response.ok) {
      //     setStateLoader(false);
      //     const data = await response.json();
      //     console.log("API response:", data);
      //     setBooks(data);
      //   } else {
      //     setStateLoader(false);
      //     // alert('ingredients entered incorrectly');
      //     Swal.fire({
      //       html: `
      //   <div style="display: flex; flex-direction: column; align-items: center;">
      //     <svg width="48" height="48" fill="red" viewBox="0 0 24 24"><path d="..."/></svg>
      //     <h2>double-check your ingredients</h2>
      //     <p>Enter ingredients in a format, like: 1 cup rice, 1 egg</p>
      //   </div>
      // `
      //     });
      //   }
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

  // ПОДШАГ ШАГА 8
const addItemToFavourite = (book) => {
  // prevent duplicates
  //if (bookList.filter((aBookInTheFavoriteArray) => aBookInTheFavoriteArray.id === book.id).length === 0) {
    setBookList([...bookList, book]);
    console.log(" favorite Added:", book.volumeInfo.title);
  //}
};




//Подшаг 2 шага 10
// const crossedWord = (event) => {
//   const li = event.target;
//   li.classList.toggle('crossed');
// }

//Подашаг 2 шага 13
// const deleteItem = () => {
//   let listArray = bookList;
//   listArray = [];
//   setBookList({listArray})
// }


  return (<div>
    {/* {stateLoader && <LoaderPage />} */}

    <div className='search-books-wrapper'>
      <h1>Book Finder</h1>


      <p className="description-text">Search for your favorite books by title or author.</p>
      <form onSubmit={finalSearch}>
        <input
          className="inputField"
          onChange={bookSearch}
          value={mySearch}
          placeholder="Search for books..."
        />
        <button  className="filled-btn" onClick={finalSearch}>SEARCH</button>
      </form>

      {/* render books */}

      <p></p>
      {myBooks.map((book) => (
        <BooksComponent
          key={book.id}
          image={book.volumeInfo.imageLinks?.thumbnail}
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors?.join(", ")}
          publishedDate={book.volumeInfo.publishedDate}
          onAdd={() => addItemToFavourite(book)}
          
        />
      ))}
    </div>

    {/* FAVOURITES */}
    {/* <div className="container">
      <button onClick={() => addItem(setBookList)} className="btn add">ADD</button>
    </div> */}

    {/* <ul>
      {bookList.map((item, index) => (
        <li onClick={crossedWord} key={index}>
          {item}</li>
      ))}
    </ul> */}

    {/* <div className="container">
      <button onClick={() => deleteItem()} className="btn delete">Delete</button>
    </div> */}
      <Slides /> 
  </div>

  );



}


export default HomePage;
































