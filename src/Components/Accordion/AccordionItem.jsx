import { useState } from "react"

export const AccordionItem = ({ image, author, country, sold, content }) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleIsopen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>

            <div className="image-content-container">

                <img className="image-accordion"
                    src={image}
                    alt={author}
                />
                <div>
                    <div className={isOpen ? 'active' : 'default'} onClick={handleIsopen}>

                        <div className="author-icon">
                            <div className="author-info">
                                <p className="overline">{country}</p>
                                <div className="author title-4">{author}</div>
                                <div className="sold-info">
                                    <svg className="book-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M18.3334 13.8775C18.3334 14.0858 18.2918 14.2942 18.2084 14.4858C18.1278 14.6779 18.0119 14.8531 17.8668 15.0025C17.7159 15.145 17.5409 15.2608 17.3501 15.3442C17.1544 15.4238 16.9447 15.4635 16.7334 15.4608C15.7903 15.4449 14.8484 15.5343 13.9251 15.7275C12.831 15.8565 11.7771 16.2173 10.8334 16.7858V4.36082C11.7426 3.92749 12.7168 3.64582 13.7168 3.52749C14.7345 3.32547 15.771 3.23327 16.8084 3.25249C17.2217 3.27543 17.61 3.45763 17.8918 3.76082C18.1668 4.05416 18.3193 4.44166 18.3168 4.84416L18.3334 13.8775ZM9.16677 4.36082V16.7858C8.23871 16.2228 7.2022 15.8622 6.12511 15.7275C5.18452 15.5373 4.22632 15.4479 3.26677 15.4608C3.05549 15.4635 2.84582 15.4238 2.65011 15.3442C2.45975 15.2604 2.28504 15.1449 2.13344 15.0025C1.98485 14.8559 1.86848 14.6799 1.79177 14.4858C1.70813 14.294 1.66555 14.0868 1.66677 13.8775V4.79415C1.66809 4.39243 1.82205 4.00623 2.09747 3.71379C2.3729 3.42134 2.74919 3.24452 3.15011 3.21915C4.20986 3.19236 5.26927 3.28461 6.30844 3.49415C7.30317 3.62028 8.2695 3.91328 9.16677 4.36082Z" fill="#FACC70" />
                                    </svg>
                                    <p className="body-text-14">{sold}</p>
                                </div>

                            </div>
                            {isOpen ? (
                                <svg className="icon" xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9148 17.2635C21.079 18.183 19.656 18.2508 18.7365 17.4149L12 11.2908L5.2635 17.4149C4.34402 18.2508 2.92101 18.183 2.08512 17.2635C1.24923 16.344 1.31699 14.921 2.23647 14.0851L10.4865 6.58514C11.3447 5.80495 12.6553 5.80495 13.5135 6.58514L21.7635 14.0851C22.683 14.921 22.7507 16.344 21.9148 17.2635Z" fill="#1A2E4B" />
                                </svg>
                            ) : (
                                <svg className="icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.55729 6.67513C3.35337 5.83227 4.70862 5.77016 5.58431 6.53639L12 12.1501L18.4157 6.53639C19.2914 5.77016 20.6466 5.83227 21.4427 6.67513C22.2388 7.51798 22.1743 8.8224 21.2986 9.58864L13.4414 16.4636C12.6241 17.1788 11.3759 17.1788 10.5586 16.4636L2.70143 9.58864C1.82574 8.8224 1.7612 7.51798 2.55729 6.67513Z" fill="#1A2E4B" />
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