import { AccordionItem } from "./AccordionItem.jsx"
import { accordionsData } from "../../data/accordionsData.jsx"
import './style.css'

export const Accordion = () => {
  return (<div className="accordion">
    <div>
      <h2 className="page-title">Interesting facts about authors</h2>
    </div>
    {accordionsData.map((item, index) =>
      <AccordionItem key={index} image={item.image} country={item.country} sold={item.sold} author={item.author} content={item.content} />
    )}
  </div>
  )
}

