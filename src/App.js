import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import MyList from './MyList';
import MyMealsAndIngridients from './MyMealsAndIngridients';

function App() {


// STEP 32
// Прописываем часть шага localStorage в useState
//И если у нас что то имеется в mealPlans не пустой массив то делаем JSON.parse
// В противном случае у нас будет пустой массив

  // STEP 7 
  //  Нам нужно прописать состояние и прированием его к useState это у нас будет массив
  const [mealPlans, setMealPlans] = useState(
    localStorage.mealPlans ? JSON.parse(localStorage.mealPlans) : [])

  // STEP 16
  // Мы должны сделать ращницу между заметкой на котору мы нажали и при этом открывалась под нее форма
  // которую мы можем редактировать
  // Нам нужно новое состояние и приравниваем это к useState(false)
  //Потому что мы хотим чтобы наша заметка изначально не была выбрана
  const [selectedDay, setSelectedDay] = useState(false)


//   STEP 31
// Нам нужно научиться сохранять информацию через localStorage потому что нет бекенда
// Нам понадобиться useEffect
// И  унас будет такая логика что localStorage.setItem(это всегда исапользуется с localStorage)
// Мы говорим что мы хотим обращать внимание именно на то меняется mealPlans or not
// И мы хотим показывать в определенном формате JSON.stringify
// То есть мы не только сохраняем мы отображаем информацию в определенном формате иначе не будет работать
// И после этого должны привязать к mealPlans
// Структоруа с использования localStorage всегда одна
useEffect(() => {
  localStorage.setItem("mealPlans", JSON.stringify(mealPlans));
}, [mealPlans])

  // STEP 6
  // Задефайним addMeal
  //И потом передаь этот пропс ребенку MyList

  const addMeal = () => {
    // STEP 8 
    // Создаем обьект newMeal потому что у нас у каждой заметки по меню будут определенны характеристики
    // например: title and etc.
    const newMeal = {
      title: "Monday meal",

      //STEP 12
      // Нам нужно удалять каждый день из списка не все сразу,  идля этого нам нужно знать ID
      // Но мы не можем прописывать ID (1, 2, 3, 4) 
      //Но у нас у каждого эдемента будет свой айди
      // поэтому часто используют библиотеку uuid https://www.npmjs.com/package/uuid
      // для установки: npm i uuid
      // функция: uuid();
      // импортировать:import { v4 as uuid } from 'uuid';
      //Для этого мы будем просто писать id: uuid() то есть вызывать эту функцию
      id: uuid(),
      mealForADay: "",
      notes: ""
    }

    // STEP 9
    // Мы должны передать этот обьект в новый компонент
    // Но прежде чем передать вновый компонент мы должны прописать логику поменять состояние
    // Что как только у нас будет нажата кнопка ADD мы меняем состояние
    // Берем setMealPlans, создаем новый массив это юудет у нас newMeal
    // Мы говорим добавь нам сюда нашу новую заметку и также покажи мне не убирай со страницы а добавь в общий массив все остальное
    // Для этого испольщуем опиратор расширения
    //Нам нужно чтобы при нажатии мы видели что мы добавили видели текст
    //Нам нужно всю эту логику передать в компонент MyList
    setMealPlans([newMeal, ...mealPlans])
    console.log(newMeal)
  }

  // STEP 14
  // Прописываем функцию
  // Указываем параметр mealID
  const deleteDay = (mealId) => {
    //   Мы говорим что мы хотим поменять наше состояние через setMealPlans и использунм filter() method
    //   Мы используем ID чтобы сравнивать ID с тем ID на который мы нажали и если он не одинаковый 
    //   ID удаляется то есть не попападает в новый массив который был создан через filter
    setMealPlans(mealPlans.filter(({ id }) => id !== mealId))
  }

  // SETP 21
  // Создаем новую const
  const updatedDay = (myUpdatedMeal) => {
    // Создаем новую const и это у нас будет новый массив
    // Мы возьмем все наши заметки то есть mealPlans сделаем на нем метод Map()
    const myUpdatedMeals = mealPlans.map((mealPlan) => {
      // и мы будем смотреть чтобы id нашего mealPlan был таким же как id вот этой формы что у нас открыта
      // и если они у нас абсолютно одинаковы то return myUpdatedMeal
      // Если же нет то тогда покажи нам просто mealPlan
      if (mealPlan.id === myUpdatedMeal.id) {
        return myUpdatedMeal;
      }
      return mealPlan;

    })

    // STEP 22
    // мы должны прописать setMealPlans и сказать что если если будут какие то изминение
    // то нужно все менять и принимать во внимание
    setMealPlans(myUpdatedMeals)

  }

// STEP 27
// Создаем функцию которая будет проверять ID нашей заметки(формы) и ID того дня который выбран
// Испольщуем метод find() и мы будем искать по ID
// И помимо этого мы напишем что id нашей формы должен быть равен selectedDay
const getActiveMeal = () => {
   return mealPlans.find(({id}) => id === selectedDay);
}

  return (

    <div>
      {/* STEP 1
    Создаем 2 компонента
    MyList
    MyMealsAndIngridients */}

      {/* STEP 5
      Добавляем prop addMeal to MyList */}

      {/* STEP 16 
      Передаем selectedDay и setSelectedDay like props to MyList */}

      {/* STEP 15
      Передаем функцию deleteDay через props в MyList */}

      {/* STEP 10
      Добавляем новый prop и приравниваем его к mealPlans
      и таким образом передаем его в новый компонент но мы хотим его не только передать но и туда что то добавлять
      И менять состояние благодаря фцнкции setMealPlans которую мы прописали выше
       */}
      <MyList
        mealPlans={mealPlans}
        addMeal={addMeal}
        deleteDay={deleteDay}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />

      {/* STEP 23
      Передаем updatedDay в  MyMealsAndIngridients component */}

      {/* SETP 20
      Передаем selectedDay prop ребенку MyMealsAndIngridients
      То ксть один и тот же prop selectedDay мы испольщуем в 2х дочерних компонентах */}
      <MyMealsAndIngridients selectedDay={getActiveMeal()} updatedDay={updatedDay} />
    </div>
  );
}

export default App;




