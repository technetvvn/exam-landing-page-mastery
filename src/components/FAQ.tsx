
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How is this course different from others?",
      answer: "Our course is designed by successful candidates who understand exactly what it takes to crack competitive exams. We focus on strategic preparation with proven shortcuts, time management techniques, and a comprehensive approach covering all exam topics. Our unique '90-second decision' method helps you maximize your score by spending the right amount of time on each question."
    },
    {
      question: "Is this course suitable for all government exams?",
      answer: "Yes, this course covers all major government exams including SSC (CGL, CHSL, MTS), Banking (IBPS PO, IBPS Clerk, SBI PO), and Railways (RRB NTPC, Group D). The syllabus for these exams overlaps significantly, and our course is structured to address all relevant topics while highlighting exam-specific requirements."
    },
    {
      question: "What if I'm a complete beginner?",
      answer: "Our course is designed to cater to all levels, from beginners to advanced learners. We start with fundamentals and gradually progress to more complex topics. The structured approach ensures that even complete beginners can follow along and build their knowledge systematically."
    },
    {
      question: "How long do I get access to the course materials?",
      answer: "Once enrolled, you receive lifetime access to all course materials, including future updates. This allows you to learn at your own pace and revisit topics whenever needed during your preparation journey."
    },
    {
      question: "Are there any mock tests included?",
      answer: "Yes, the course includes comprehensive topic-wise practice tests and full-length mock tests that simulate the actual exam environment. These tests help you assess your preparation level and get comfortable with the exam pattern and time constraints."
    },
    {
      question: "Is there any support available if I have doubts?",
      answer: "Absolutely! We provide dedicated doubt-clearing sessions and a community forum where you can interact with instructors and fellow aspirants. Your queries will be addressed promptly to ensure uninterrupted learning."
    }
  ];

  return (
    <div className="py-16 bg-gray-50" id="faqs">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our course
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-xl shadow-md">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 text-left hover:no-underline hover:bg-gray-50">
                  <span className="text-lg font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
