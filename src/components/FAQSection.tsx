import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is ProductFlow and how does it work?",
      answer: "ProductFlow is an all-in-one productivity platform designed to streamline workflows and boost team collaboration. It combines project management, analytics, team communication, and integration capabilities in a single, intuitive interface."
    },
    {
      question: "How secure is my data with ProductFlow?",
      answer: "We take security very seriously. Your data is protected with enterprise-grade security including end-to-end encryption, multi-factor authentication, role-based access control, and compliance with SOC 2, GDPR, and HIPAA standards. We undergo regular security audits and maintain the highest industry standards."
    },
    {
      question: "Can I integrate ProductFlow with my existing tools?",
      answer: "Absolutely! ProductFlow integrates with over 100+ popular tools and services including Slack, Google Workspace, Microsoft 365, Salesforce, Trello, and many more. We also provide a robust API and webhook system for custom integrations."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes, ProductFlow offers fully responsive web access and native mobile applications for both iOS and Android. You can access all features, receive push notifications, and sync data seamlessly across all your devices."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer comprehensive support including 24/7 chat support, email support, extensive documentation, video tutorials, and dedicated customer success managers for enterprise plans. Our support team is committed to helping you succeed."
    },
    {
      question: "Can I try ProductFlow before purchasing?",
      answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required. You can also book a personalized demo with our team to see how ProductFlow can specifically benefit your organization."
    },
    {
      question: "How does pricing work?",
      answer: "We offer flexible pricing plans to suit teams of all sizes, from startups to enterprise organizations. Pricing is based on the number of users and features needed. All plans include core features, with advanced features available in higher tiers."
    },
    {
      question: "What happens to my data if I cancel?",
      answer: "You maintain full control of your data. If you decide to cancel, you can export all your data in standard formats. We provide a 30-day grace period to ensure smooth transition and data recovery if needed."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about ProductFlow
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card shadow-card hover:shadow-elegant transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;