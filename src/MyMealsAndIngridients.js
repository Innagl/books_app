const MyMealsAndIngridients = () => {
    return (
        // STEP 3
        // Добавляем инупт и текст ериа
        <div className="whole-plan">
            <div className="meal-editing"></div>
            <input
                type="text"
                className="myInput"
                placeholder="Today is..."
            // STEP 1
            // Мы попападеам на страницу и у нас сразу отображается форма, но мы этого не хотим
            // Мы хотим нажать на кнопку ADD и потом нажать на заметку и чтобы открылась форма
            // И если мы нажимаем на другую заметку мы хотим чтобы открылась форма которая имеет тот же ID что и зметка
            // Мы хоттим чтобы если мы что то печатаем в Тайтле или text erea у нас дублировалась это в заметке
            // То есть мы будем передавать наше состояние из компонента в компонент
            // И мы будем также менять наше состояние динамично
            //Добавляем ID и присваемваем title мы пытаемся соединиить тут ID с title in MyList.js
                 id="title"
                
            />

            <textarea
                placeholder="Write your meal plan here"
            />

             <textarea
                placeholder="List of ingridients"
            />



        </div>
    )
}

export default MyMealsAndIngridients;