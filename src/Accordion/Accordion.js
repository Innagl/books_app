//STEP 3

import { AccordionItem } from "./AccordionItem"
import { list } from "./list"
import './style.css'

export const Accordion = () => {
  return (<div className="accordion">
    {/* //в листе испольщуем map() method потому что мы хотим посмотреть каждый item and index */}
    {list.map((item, index) =>
      //и мы хотим передать пропсы в AccordionItem
      <AccordionItem key={index} image={item.image} author={item.author} content={item.content} />

    )}


  </div>
  )
}

