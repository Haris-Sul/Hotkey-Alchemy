import { useState } from "react";
import watch from "../assets/watch.png";
import watch2 from "../assets/watch2.png";
import { faqData, FaqItem } from "../constants/faqData";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h2 className="text-3xl font-semibold text-center mb-16">
        Frequently Asked Questions
      </h2>

      <img
        className="absolute left-20 top-1/3"
        src={watch}
        alt="mystical watch"
        width={200}
      />
      <img
        className="absolute right-24 top-2/3"
        src={watch2}
        alt="mystical watch"
        width={200}
      />

      {faqData.map((faq: FaqItem, index: number) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleFaq(index)}
            className={`w-full text-left p-4 bg-white ${openIndex === index && "text-secondary2"} rounded-md focus:outline-none`}>
            <h3 className="text-xl font-semibold">{faq.question}</h3>
          </button>
          {openIndex === index && (
            <div>
              <hr className="border-t-2 border-gray-200 mx-2" />
              <div className="p-4 text-lg text-dark bg-white rounded-md">
                <p>{faq.answer}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
