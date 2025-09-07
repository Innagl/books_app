//STEP 3

import { AccordionItem } from "./AccordionItem"
import { list } from "./list"
import './style.css'

export const Accordion = () => {
  return (<div className="accordion">
    <div>
      <h2 className="page-title">Interesting facts about authors</h2>
    </div>
    {list.map((item, index) =>
      <AccordionItem key={index} image={item.image} author={item.author} content={item.content} />
    )}


  </div>
  )
}

