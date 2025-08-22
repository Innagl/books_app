
// STEP 10
// Добавляем новый проп mealPlan
const MyList = ({ mealPlans, addMeal, deleteDay, selectedDay, setSelectedDay }) => {
    return (<div>
        {/* STEP 2
        Работаем с эттм компонентом */}
        <div>
            <h1>Weakly Meal Plan Ideas</h1>


            {/* STEP 4
            Теперь нам нужно чтопы кнопка заработаала (зотябы увидеть в консоле что она нажата)
            У нас подительский компонент App.js
            Кнопка живет в ребенке добавляем onClick и назовем ее addMeal
            И мы не будем прописывать addMeal здесь а пропишем у родителя и ьудем использовать прописывать
            Это не обязательно но когда небольгое придожение ничего плохого в этом нет
            Переходим в основной компонент и добавляем там prop */}
            <button className="button-add" onClick={addMeal}>ADD</button>
        </div>

        {/* STEP 11
        Прописываем mealPlans(наше состояние) то что мы только что с вами импортировали
        И мы пишем map и дальше внутри мы пишем что м ыхотим показать на нашей странице
        В нашем случае это title потому что мы уже его прописали в нашем обьекте в основном компоненте */}
        {mealPlans.map(({ id, title, mealForADay }) => (

            // STEP 17
            // Прописываем логику что если наш selectedDay выбран то есть был клик на заметку и это true
            // тогда покажи мне определенный цвет фона
            // Если не было клика на заметку то покажи мне другой цвет фона
            //Ставим клас selected and default чтобы в CSS задать стиль
            <div className={`meal ${id === selectedDay ? "selected" : "default"}`}
               
            //Меняем по клику наше состояние
            onClick={() => setSelectedDay(id)}
            >
                <p>{title}</p>
                <p>{mealForADay}</p>

                {/* STEP 13
                Прописываем логику кнопки Delete
                оздаем функцию deleteDay и приравниваем к ID deleteDay(id)
                ID будет рендомно добавляться к каждому нашему элементу который
                Фугкцию deleteDay прописываем в APP.js  */}
                <button className="button-delete" onClick={() => deleteDay(id)}>Delete</button>
            </div>
        ))}
        <div>

        </div>
    </div>
    )
}

export default MyList;


