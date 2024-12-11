import React from 'react';
import { Container } from './layout/Container';
import { Card } from './ui/Card';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Card className="mb-4">
      <button
        className="w-full text-left p-4 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-bold">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-purple-500" />
        ) : (
          <ChevronDown className="w-6 h-6 text-purple-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-gray-600">
          {answer}
        </div>
      )}
    </Card>
  );
}

export function FAQ() {
  const faqs = [
    {
      question: "What are your opening hours?",
      answer: "We're open from 10 AM to 8 PM on weekdays, and 9 AM to 10 PM on weekends and holidays."
    },
    {
      question: "Is there an age limit?",
      answer: "Air Park is suitable for children aged 4 and above. Adults are welcome too! Children under 12 must be accompanied by an adult."
    },
    {
      question: "What should I wear?",
      answer: "Comfortable clothing and socks are required. We recommend wearing athletic wear and bringing an extra pair of socks."
    },
    {
      question: "Do you offer party packages?",
      answer: "Yes! We offer various party packages including private areas, food, and dedicated staff. Contact us for more details."
    },
    {
      question: "Are there lockers available?",
      answer: "Yes, we provide secure lockers for your belongings at a small additional cost."
    },
    {
      question: "What safety measures do you have in place?",
      answer: "We maintain strict safety protocols, including regular equipment inspections, trained staff supervision, and first aid personnel on-site."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-400 to-yellow-300 py-12">
      <Container>
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Frequently Asked Questions
        </h1>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}