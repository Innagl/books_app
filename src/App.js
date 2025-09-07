// import { useState } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";


import { useState } from 'react';
import HomePage from "./HomePage";
import Favourites from "./Favourites";
import './App.css'
import DidYouKnow from "./DidYouKnow";




function App() {
  const [bookList, setBookList] = useState([]);

  return (
    <>
      <Router>
        <nav>
          <svg className="item start"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 8C6 6.93913 6.42143 5.92172 7.17157 5.17157C7.92172 4.42143 8.93913 4 10 4H14C14.728 4 15.412 4.194 16 4.536C16.6081 4.18489 17.2978 4.00003 18 4H22C23.454 4 24.728 4.776 25.428 5.938C25.848 5.602 26.34 5.346 26.892 5.198L30.756 4.164C31.2634 4.02789 31.7927 3.99307 32.3136 4.06153C32.8345 4.12999 33.3368 4.30039 33.7918 4.56301C34.2468 4.82562 34.6457 5.1753 34.9655 5.59207C35.2854 6.00884 35.52 6.48454 35.656 6.992L43.936 37.902C44.0721 38.4094 44.1069 38.9387 44.0385 39.4596C43.97 39.9805 43.7996 40.4828 43.537 40.9378C43.2744 41.3928 42.9247 41.7917 42.5079 42.1115C42.0912 42.4314 41.6155 42.666 41.108 42.802L37.244 43.836C36.7366 43.9721 36.2073 44.0069 35.6864 43.9385C35.1655 43.87 34.6632 43.6996 34.2082 43.437C33.7532 43.1744 33.3543 42.8247 33.0345 42.4079C32.7146 41.9912 32.48 41.5155 32.344 41.008L26 17.326V40C26 41.0609 25.5786 42.0783 24.8284 42.8284C24.0783 43.5786 23.0609 44 22 44H18C17.2978 44 16.6081 43.8151 16 43.464C15.3919 43.8151 14.7022 44 14 44H10C8.93913 44 7.92172 43.5786 7.17157 42.8284C6.42143 42.0783 6 41.0609 6 40V8ZM10 8H14V40H10V8ZM22 40H18V8H22V40ZM27.928 9.062L31.79 8.028L40.074 38.938L36.21 39.972L27.928 9.062Z" fill="#CDE7BE" />
          </svg>


          <NavLink to="/" className={({ isActive }) => "item body-text-18" + (isActive ? " active-nav" : "")}>Home page</NavLink>
          <NavLink to="/favourites" className={({ isActive }) => "item body-text-18" + (isActive ? " active-nav" : "")}>My favourites</NavLink>
          <NavLink to="/DidYouKnow" className={({ isActive }) => "item body-text-18" + (isActive ? " active-nav" : "")}>Did you now?</NavLink>
        </nav>


        <Routes>
          <Route path="/" element={<HomePage bookList={bookList} setBookList={setBookList} />} />
          <Route path="/favourites" element={<Favourites bookList={bookList}  setBookList={setBookList}/>} />
          <Route path="/DidYouKnow" element={<DidYouKnow />} />
        </Routes>
      </Router>
    </>

  )
}

export default App;





