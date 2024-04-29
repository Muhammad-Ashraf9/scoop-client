import { useState } from "react";
import './Acc.css'

export const Accordion = ({ faqs }) => {
    const [expandedItem, setExpandedItem] = useState(0);

    const renderItem = faqs.map((item) => {
        const isExpanded = item.id === expandedItem;

        const handleClick = (id) => {
            isExpanded ? setExpandedItem(0) : setExpandedItem(id);
        };

        return (
            <div key={item.id}>
                <h2 id="accordion-flush-heading-1">
                    <button onClick={() => handleClick(item.id)} type="button" 
                            className="btn btn-link text-lg d-flex justify-content-between w-100 py-3 font-weight-medium text-left text-gray-500 border-bottom border-gray-200" >
                        <span className="h5 text-dark">{item.question}</span>
                        <span className={`plus-icon me-2 d-flex justify-content-center align-items-center ${isExpanded ? 'bg-secondary text-white' : 'bg-white text-black'}`} >
                            {isExpanded ? '-' : '+'}
                        </span>
                    </button>
                </h2>
                {isExpanded && (
                    <div id="accordion-flush-body-1" aria-labelledby="accordion-flush-heading-1">
                        <div className="py-3 border-bottom border-gray-200 slanted-background ">
                            <p className="mb-2 text-gray-500 w-75 m-auto">{item.answer}</p>
                        </div>
                    </div>
                )}
            </div>
        );
    });

    return (
        <div>
            {renderItem}
        </div>
    );
};
