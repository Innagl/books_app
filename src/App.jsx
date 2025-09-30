import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import HomePage from "./HomePage.jsx";
import Favorites from "./Components/Favorites/Favorites.jsx";
import './App.css'
import DidYouKnow from "./DidYouKnow.jsx";
import Navbar from "./Components/Navbar.jsx";


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/DidYouKnow" element={<DidYouKnow />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;





