// SETP 19
// Импортируем selectedDay prop
const MyMealsAndIngridients = ({ selectedDay, updatedDay }) => {

    // STEP 25
    // Прописываем функцию editMyMeal
    //key это myInput, value
    const editMyMeal = (myInput, value) => {
        updatedDay({
            //Мы хотим передать selectedDay, то ссть наше состояние которое мы прописываем в App.js
            //Которое отвечает за то чтобы смотреть выбран у нас день или нет
            ...selectedDay,
            //И прописываем [myInput]: value, таким образом мы меняем value
            [myInput]: value
        })

    }

    //STEP 26
    // Мы должны сказать что любая заметка должна иметь определенный ID
    // Который будет соответствовать форме
    // То есть мы с вами говорим не просто про активную заметку
    // Мы должнв сказать про вообще любую заметку что у каждой заметки должен быть ID и у каждой формы должен быть ID
    // И что если не соответствует то тогда ты при клике на заметку покажи форму
    // Мы должны видеть форму на странице только. тогда когда selectedDay активен
    // Поэтому прописываем еще одно условие
    // Что если у нас не selectedDay то тогда покажи нам не форму а например просто текст
    if (!selectedDay) return <p>Plan your week ahead of time!</p>

    return (
        // STEP 3
        // Добавляем инупт и текст ериа
        <div className="whole-plan">
            <div className="meal-editing"></div>
            <input
                type="text"
                className="myInput"
                placeholder="Today is..."
                // STEP 18
                // Мы попападеам на страницу и у нас сразу отображается форма, но мы этого не хотим
                // Мы хотим нажать на кнопку ADD и потом нажать на заметку и чтобы открылась форма
                // И если мы нажимаем на другую заметку мы хотим чтобы открылась форма которая имеет тот же ID что и зметка
                // Мы хоттим чтобы если мы что то печатаем в Тайтле или text erea у нас дублировалась это в заметке
                // То есть мы будем передавать наше состояние из компонента в компонент
                // И мы будем также менять наше состояние динамично
                //Добавляем ID и прописываем title мы пытаемся соединиить тут ID с title in App.js
                id="title"
                value={selectedDay.title}

                // STEP 24
                // Мы должны использлвать onChange если хотим что то менять в инпуте
                //Будем писать (e) потому что мы знаем что у нас всегда e.target.value
                // И у нас будет функция editMyMeal
                // И в фунции мы скажем что меняй id title
                // key у нас title
                onChange={(e) => editMyMeal("title", e.target.value)}

            />

            <textarea
                placeholder="Write your meal plan here"

                // STEP 28
                // Приравниваем id к mealForADay и прописываем value к mealForADay
                //Add onChange
                id="mealForADay"
                value={selectedDay.mealForADay}
                onChange = {(e) => editMyMeal("mealForADay", e.target.value)}
            />

            <textarea
                placeholder="Notes"

                // STEP 29
                // Приравниваем id к mealForADay и прописываем value к ingridients
                // Но мы неипередаем ингридиенты в карточку
                //Add onChange
                id="notes"
                value={selectedDay.notes}
                onChange={(e) => editMyMeal("notes", e.target.value)}
            />



        </div>
    )
}

export default MyMealsAndIngridients;


