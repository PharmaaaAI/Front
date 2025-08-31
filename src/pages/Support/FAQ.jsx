import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const AccordionItem = ({ question, children, isOpen, setIsOpen }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-gray-800 focus:outline-none cursor-pointer"
      >
        <span className="text-lg font-medium">{question}</span>
        <FiChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-600 leading-relaxed pr-8">
          {children}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openAccordion, setOpenAccordion] = useState(-1);

  const handleAccordionClick = (index) => {
    setOpenAccordion(openAccordion === index ? -1 : index);
  };

  return (
    <div className="container mx-auto px-6 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
          FAQ
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about how PharmaAI helps you find the
          right medicine for your needs.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">
            General Questions
          </h2>
          <div className="space-y-2">
            <AccordionItem
              question="What does PharmaAI do?"
              isOpen={openAccordion === 0}
              setIsOpen={() => handleAccordionClick(0)}
            >
              <p>
                PharmaAI is an intelligent platform that uses AI to help you
                find the right medications for your specific health needs. By
                analyzing the information you provide about your symptoms and
                health profile, our system recommends suitable and effective
                treatment options.
              </p>
            </AccordionItem>
            <AccordionItem
              question="Who is this technology for?"
              isOpen={openAccordion === 1}
              setIsOpen={() => handleAccordionClick(1)}
            >
              <p>
                Our platform is designed for anyone seeking clear, reliable, and
                personalized recommendations for health products. Whether you're
                dealing with a common cold, seasonal allergies, or minor aches
                and pains, PharmaAI helps you navigate your options confidently.
              </p>
            </AccordionItem>
            <AccordionItem
              question="How is my personal data kept private and secure?"
              isOpen={openAccordion === 2}
              setIsOpen={() => handleAccordionClick(2)}
            >
              <p>
                Your privacy is our highest priority. We use state-of-the-art
                encryption and anonymization to protect all personal and health
                information you share. We are fully compliant with data
                protection regulations like GDPR to ensure your data is handled
                responsibly and is never shared without your consent.
              </p>
            </AccordionItem>
            <AccordionItem
              question="Is this a substitute for professional medical advice?"
              isOpen={openAccordion === 3}
              setIsOpen={() => handleAccordionClick(3)}
            >
              <p>
                No. PharmaAI is an informational tool designed to help you make
                informed decisions about products. It is not a substitute for a
                diagnosis or advice from a qualified healthcare professional.
                Always consult your doctor or pharmacist for serious conditions
                or if your symptoms persist.
              </p>
            </AccordionItem>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">
            How It Works
          </h2>
          <div className="space-y-2">
            <AccordionItem
              question="What kind of AI models do you use?"
              isOpen={openAccordion === 4}
              setIsOpen={() => handleAccordionClick(4)}
            >
              <p>
                We utilize advanced large language models (LLMs) that have been
                specifically trained on a vast database of medical information,
                product labels, and clinical guidelines. This allows our AI to
                understand the nuances of your symptoms and match them with the
                most appropriate products.
              </p>
            </AccordionItem>
            <AccordionItem
              question="What information does the AI analyze?"
              isOpen={openAccordion === 5}
              setIsOpen={() => handleAccordionClick(5)}
            >
              <p>
                Our AI analyzes the information you provide, such as your
                symptoms, age, and any pre-existing conditions you choose to
                share. It cross-references this data with its extensive
                knowledge base of medications to find the most suitable options
                for you.
              </p>
            </AccordionItem>
            <AccordionItem
              question="How do you ensure the recommendations are accurate?"
              isOpen={openAccordion === 6}
              setIsOpen={() => handleAccordionClick(6)}
            >
              <p>
                Our recommendations are based on publicly available product
                information and established medical guidelines. Furthermore, our
                AI's suggestions are continuously reviewed and refined by a team
                of pharmacists and medical experts to ensure they are safe,
                relevant, and reliable.
              </p>
            </AccordionItem>
            <AccordionItem
              question="How does PharmaAI stay up-to-date with new medicines?"
              isOpen={openAccordion === 7}
              setIsOpen={() => handleAccordionClick(7)}
            >
              <p>
                Our system is regularly updated with the latest information on
                products, including new formulations, recalls, and changes in
                usage guidelines. We continuously scan trusted sources to ensure
                our recommendations are always current.
              </p>
            </AccordionItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
