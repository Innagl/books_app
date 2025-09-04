import { slidesData } from "./SlidesData";
import { useState } from "react";

const Slides = () => {
  const [yearBook, setYearBook] = useState(0)
  const { id, name, author, age, image } = slidesData[yearBook];
  console.log(slidesData[yearBook])


  const previousYearBook = () => {
    setYearBook((yearBook => {
      yearBook--;

      if (yearBook < 0) {
        return slidesData.length - 1;
      }
      return yearBook;
    }))
  }

  const nextYearBook = () => {
    setYearBook((yearBook => {
      yearBook++;
      if (yearBook > slidesData.length - 1) {
        yearBook = 0;
      }
      return yearBook;
    }))
  }


  return (<div className="slides-container">


    <h1>Top Books Loved by Readers in 2024</h1>
    <div className="slides-wrapper">
      <div className="text-slide">
        <h2> {name}</h2>
        <h3>{author}</h3>
      </div>

      <div className="btn-slides">
        <button className="stroke-btn" onClick={previousYearBook}>Previous</button>
        <div>


          <div className="image-slide">
            <img className="books-loved" src={image} alt="book" />
          </div>
        </div>
        <button className="stroke-btn" onClick={nextYearBook}>Next</button>

      </div>
    </div>



  </div>
  )

}


export default Slides;