//Подшаг 2 STEP 6

function BooksComponent({ id, title, author, publishedDate, image, onAdd }) {

    //Подшаг 1 STEP 7
    //Отображаем характеристики рецептов
    {/* label - recepi name
        calories
        image */}

    return (<div>
        {/* {anyWordWeWant.map((element => {
    const {label, image, calories} = element; */}


        <div className="container-">
            <h2>{title}</h2>
            <button onClick={onAdd}>Add to Favourites</button>
         
        </div>






    </div>
    )





}
export default BooksComponent;  