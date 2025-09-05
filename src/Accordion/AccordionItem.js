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

            <div className="image-content-container">
                <img className="image-accordion"
                    src={image}
                    alt={author}
                />
                <div>
                    <div className={isOpen ? 'active' : 'default'} onClick={handleIsopen}>

                        <div className="author-icon">
                            <div className="author title-4">{author}</div>
                            {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.08515 17.2635C2.92104 18.183 4.34405 18.2508 5.26353 17.4149L12 11.2908L18.7365 17.4149C19.656 18.2508 21.079 18.183 21.9149 17.2635C22.7508 16.344 22.683 14.921 21.7635 14.0851L13.5135 6.58514C12.6553 5.80495 11.3447 5.80495 10.4865 6.58514L2.2365 14.0851C1.31702 14.921 1.24926 16.344 2.08515 17.2635Z" fill="#CDE7BE" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24" fill="none">
                                    <g transform="translate(2,2) scale(1.3)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.3901 4.49099C1.94736 3.878 2.89603 3.83283 3.50902 4.39009L8.00001 8.47281L12.491 4.39009C13.104 3.83283 14.0527 3.878 14.6099 4.49099C15.1672 5.10398 15.122 6.05265 14.509 6.60991L9.00902 11.6099C8.43689 12.13 7.56313 12.13 6.991 11.6099L1.491 6.60991C0.878015 6.05265 0.83284 5.10398 1.3901 4.49099Z" fill="#AAAAAA" />
                                    </g>
                                </svg>
                            )}
                        </div>
                    </div>
                    {
                        isOpen && <div className="content secondary-text body-text-18">
                            {content}
                        </div>
                    }
                </div>
            </div>



        </div>
    )
}