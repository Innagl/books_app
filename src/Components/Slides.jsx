import { slidesData } from "../data/slidesData.jsx";
import { useState } from "react";

const Slides = () => {
  const [bookOfTheYear, setBookOfTheYear] = useState(0)
  const { name, author, image } = slidesData[bookOfTheYear];
  console.log(slidesData[bookOfTheYear])


  const previousBookOfTheYear = () => {
    setBookOfTheYear((bookOfTheYear => {
      bookOfTheYear--;

      if (bookOfTheYear < 0) {
        return slidesData.length - 1;
      }
      return bookOfTheYear;
    }))
  }

  const nextBookOfTheYear = () => {
    setBookOfTheYear((bookOfTheYear => {
      bookOfTheYear++;
      if (bookOfTheYear > slidesData.length - 1) {
        bookOfTheYear = 0;
      }
      return bookOfTheYear;
    }))
  }


  return (<div className="slides-container">

    <h2>Top books loved by readers in 2024</h2>
    <div className="slides-wrapper">
      <div className="text-slide">
        <h3> {name}</h3>
        <p className="body-text-16">By: {author}</p>
      </div>
      <div className="btn-slides">
        <button className="stroke-btn" onClick={previousBookOfTheYear}>Previous</button>
        <div>
          <div className="image-slide">
            <img className="books-loved" src={image} alt="book" />
          </div>
        </div>
        <button className="stroke-btn" onClick={nextBookOfTheYear}>Next</button>

      </div>
    </div>
  </div>
  )
}


export default Slides;