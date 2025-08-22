import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import MyList from './MyList';
import MyMealsAndIngridients from './MyMealsAndIngridients';

function App() {

  // STEP 7 
  //  Нам нужно прописать состояние и прированием его к useState это у нас будет массив
  const [mealPlans, setMealPlans] = useState([])

  // STEP 16
  // Мы должны сделать ращницу между заметкой на котору мы нажали и при этом открывалась под нее форма
  // которую мы можем редактировать
  // Нам нужно новое состояние и приравниваем это к useState(false)
  //Потому что мы хотим чтобы наша заметка изначально не была выбрана
  const [selectedDay, setSelectedDay] = useState(false)

  // STEP 6
  // Задефайним addMeal
  //И потом передаь этот пропс ребенку MyList

  const addMeal = () => {
    // STEP 8 
    // Создаем обьект newMeal потому что у нас у каждой заметки по меню будут определенны характеристики
    // например: title and etc.
    const newMeal = {
      title: "Monday",

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
     mealForADay: ""
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
      setMealPlans(mealPlans.filter(({id}) => id !== mealId))
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
      <MyMealsAndIngridients />
    </div>
  )
}

export default App;


