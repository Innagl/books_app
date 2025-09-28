import BookItem from "./BookItem";
import { useSelector } from "react-redux"
import { getBooksFounded } from "../../redux/booksSlice"; 

const Books = () => {


  const booksFounded = useSelector(getBooksFounded)

  return (
    <div className="container-books-founded">
      {booksFounded.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}

    </div>
  );
}

export default Books;
