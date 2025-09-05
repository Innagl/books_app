//Подшаг 2 STEP 6

function BooksComponent({ id, title, author, publishedDate, image, onAdd, isFavourite }) {

    //Подшаг 1 STEP 7
    //Отображаем характеристики рецептов
    {/* label - recepi name
        calories
        image */}

    return (

        <div className="book-card" >
            <img className="book-image" src={image} alt="book" />
            <div className="book-author">
                <h3 className="book-founded-title">{title}</h3>
                <p className="body-text-14">{author}</p>
            </div>

            <button
                className="stroke-btn"
                onClick={onAdd}
                disabled={isFavourite}
            >
                {isFavourite ? "Added ✓" : "Add to favourites"}

            </button>
        </div>
    )

}
export default BooksComponent;  