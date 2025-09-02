import { data } from "./Data";
import { useState } from "react";

const Slides = () => {
  const [person, setPerson] = useState(0)
  const { id, name, author, age, image } = data[person];
  console.log(data[person])


  const previousPerson = () => {
    setPerson((person => {
      person--;

      if (person < 0) {
        return data.length - 1;
      }
      return person;
    }))
  }

  const nextPerson = () => {
    setPerson((person => {
      person++;
      if (person > data.length - 1) {
        person = 0;
      }
      return person;
    }))
  }


  return (<div className="slides-container">

    <div className="titleAndArrows">
      <h1>Top Books Loved by Readers in 2024</h1>

      <div className="btn-slides">
        <button className="stroke-btn" onClick={previousPerson}>Previous</button>
        <div>
          <div >
            <h1>{id} - {name}</h1>
            <h2>{author}</h2>
          </div>

          <div >
            <img className="books-loved" src={image} alt="book" />
          </div>
        </div>
        <button className="stroke-btn" onClick={nextPerson}>Next</button>

      </div>
    </div>



  </div>
  )

}


export default Slides;