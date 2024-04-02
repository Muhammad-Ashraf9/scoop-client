import { Accordion } from "./Accordion.jsx";

export const Faq = () => {
    
    const faqs = [
        {
          "id": 1,
          "question": "Why should I use Scoop Supplement?",
          "answer": "Lorem ipsum, It was developed by a telented programmer. Repellendus earum dicta nesciunt, nulla alias consequuntur cumque incidunt saepe mollitia esse! Magni praesentium delectus excepturi nostrum illo repellendus cum eius neque, aperiam dolores quaerat quis dolore magnam doloremque minus sint nemo qui necessitatibus at. Perspiciatis, corrupti cum labore quos odio porro!"
        },
        {
          "id": 2,
          "question": "Can I access my Scoop on mobile?",
          "answer": "Lorem ipsum dolor sit amet consectetur adipisicing elit. At accusamus nobis tempore perferendis qui, quam, atque reprehenderit vero quaerat, assumenda pariatur eveniet. Maxime eaque, neque corrupti ad minus repudiandae consectetur!"
        },
        {
          "id": 3,
          "question": "Do you offer refunds?",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste dolor deserunt expedita quam fugit et inventore amet pariatur. Animi."
        },
        {
          "id": 4,
          "question": "Do you support Internation payments?",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste dolor deserunt expedita quam fugit et inventore amet pariatur. Animi."
        }
    ];
    
  return (
    <section className="my-5 p-3 border rounded shadow-sm w-75 m-auto" style={{ borderColor: '#e5e7eb' }}>        
      <h1 className="text-xl text-center font-weight-bold mb-3" style={{ textDecoration: 'underline', textUnderlineOffset: '8px', color: '#1f2937' }}>
        Frequently Asked Question?
      </h1>    
      <div id="accordion-flush">
        <Accordion faqs={faqs} />
      </div>
    </section>      
  )
}
