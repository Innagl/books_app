// import { useState } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import { useState } from 'react';
import HomePage from "./HomePage";
import Favourites from "./Favourites";
import './App.css'
import Facts from "./Facts";




function App() {
  const [bookList, setBookList] = useState([]);

  //STEP 2
  //Вместо <div></div> мы используем тэг <nav></nav> и внутри вместо тега  <a></a> как мы раньше испольовали в HTML мы теперт будем использовать <Link to></Link>
  return (
    <>


      <Router>
        <nav>
          <svg className="item start"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 44 44"
            fill="none">
            <path d="M4 3C3.73478 3 3.48043 3.10536 3.29289 3.29289C3.10536 3.48043 3 3.73478 3 4V20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H14C14.2652 21 14.5196 20.8946 14.7071 20.7071C14.8946 20.5196 15 20.2652 15 20V15.297L16 20C16.0552 20.2594 16.2111 20.4862 16.4336 20.6306C16.656 20.775 16.9266 20.8251 17.186 20.77L21.098 19.938C21.3574 19.8828 21.5842 19.7269 21.7286 19.5044C21.873 19.282 21.9231 19.0114 21.868 18.752L18.958 5.058C18.9028 4.79864 18.7469 4.57181 18.5244 4.42741C18.302 4.28302 18.0314 4.23287 17.772 4.288L14.992 4.878C14.9622 4.63583 14.8449 4.41289 14.6622 4.25118C14.4795 4.08946 14.244 4.00013 14 4H10C10 3.73478 9.89464 3.48043 9.70711 3.29289C9.51957 3.10536 9.26522 3 9 3H4ZM10 6H13V14H10V6ZM10 19V16H13V19H10ZM8 5V15H5V5H8ZM8 17V19H5V17H8ZM17.332 16.65L19.288 16.234L19.704 18.19L17.748 18.606L17.332 16.65ZM16.916 14.693L15.253 6.868L17.209 6.452L18.873 14.278L16.916 14.693Z" fill="#CDE7BE" />
          </svg>
          <Link to="/" className="item link">Home page</Link>
          <Link to="/favourites" className="item link">Favourites</Link>
          <Link to="/facts" className="item link">Facts</Link>
        </nav>


        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/facts" element={<Facts />} />
        </Routes>
      </Router>

      <HomePage bookList={bookList} setBookList={setBookList} />

    </>

  )
}

export default App;





