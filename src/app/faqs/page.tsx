import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "How do I register?",
    answer:
      "Since you are already on our website, the fastest way is to register online. You can also register in person at the center.",
  },
  {
    question: "Do you offer individual tutoring?",
    answer: "Yes, both group and one-to-one tutoring are available.",
  },
  {
    question: "Is the material fee refundable?",
    answer: "No, the material fee is included and not refundable.",
  },
  {
    question: "Is the registration fee refundable?",
    answer: "No, it is not refundable.",
  },
  {
    question: "What happens if I cancel or withdraw?",
    answer: "Please refer to our refund policy for details.",
  },
  {
    question: "Online registration is not working. What should I do?",
    answer:
      "Make sure cookies and JavaScript are enabled. You will receive a confirmation email if your registration is successful. If not, please retry or check your email address.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "Visa, MasterCard, and PayPal are accepted.",
  },
  {
    question: "What qualifications do your teachers have?",
    answer:
      "Our teachers hold bachelor’s or master’s degrees and certifications such as CELTA, with international teaching experience.",
  },
  {
    question: "Do you offer facilities for special needs candidates?",
    answer: "Yes, our centre is fully accessible.",
  },
  {
    question: "Do you offer a quiet learning environment?",
    answer: "Yes, we provide dedicated noise-free classrooms and testing labs.",
  },
  {
    question: "Do you offer evening classes?",
    answer: "Yes, our working hours are 9:00 am – 9:00 pm (Saturday–Thursday).",
  },
  {
    question: "Can I get brochures or flyers?",
    answer:
      "Yes, you can request them via email at info@tepth.net. Content matches our website.",
  },
  {
    question: "Is public transport available nearby?",
    answer:
      "Yes, buses from Al Rashidiya and Burjuman stop near Dubai Silicon Oasis, within a short walking distance.",
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-20 pb-10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-7">
            Everything you need to know about registration, courses, and our
            facilities.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20">
        <div className="max-w-2xl mx-auto px-6">
          <Accordion type="multiple" className="space-y-2 border-none">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-xl px-4 transition hover:border-gray-300"
              >
                <AccordionTrigger className="py-3 text-sm md:text-base font-medium text-gray-900 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="pb-4 text-sm text-gray-600 leading-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
