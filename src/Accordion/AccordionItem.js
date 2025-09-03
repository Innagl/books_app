import { useState } from "react"


//STEP 2
export const AccordionItem = ({ image, author, content }) => {

    // Нам нужно сказать что у нас будет состояние
    // const [isOpen, setIsOpen] = useState(false)
    // прировняем к  то есть когда открываем страницу то у нас аккордион закрыт
    const [isOpen, setIsOpen] = useState(false)

    // логика будет немного как тогл
    //Тут про логику https://htmlacademy.ru/courses/343/run/10 
    const handleIsopen = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div className="accordion-container">

            <div className="image-accordion-container">
                <img className="image-accordion"
                    src={image}
                    alt={author}
                />
                <div>
                    <div className={isOpen ? 'active' : 'default'} onClick={handleIsopen}>

                        <div className="author-icon">
                            <div className="author">{author}
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24" fill="none">
                                <g transform="translate(2,2) scale(1.3)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.3901 4.49099C1.94736 3.878 2.89603 3.83283 3.50902 4.39009L8.00001 8.47281L12.491 4.39009C13.104 3.83283 14.0527 3.878 14.6099 4.49099C15.1672 5.10398 15.122 6.05265 14.509 6.60991L9.00902 11.6099C8.43689 12.13 7.56313 12.13 6.991 11.6099L1.491 6.60991C0.878015 6.05265 0.83284 5.10398 1.3901 4.49099Z" fill="#AAAAAA" />
                                </g>
                            </svg>
                        </div>
                    </div>
                    {
                        isOpen && <div className="content">
                            {content}
                        </div>
                    }
                </div>
            </div>



        </div>
    )
}