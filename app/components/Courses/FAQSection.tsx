interface FAQ {
  q: string;
  a: string;
}

interface FAQSectionProps {
  faq: FAQ[];
}

const FAQSection = ({ faq }: FAQSectionProps) => (
  <section className="py-12 border-t border-gray-100">
    <h2 className="text-2xl font-semibold mb-6">FAQ</h2>
    <div className="space-y-4">
      {faq.map((item, index) => (
        <details
          key={index}
          className="group border border-gray-200 rounded-xl p-4"
        >
          <summary className="font-semibold cursor-pointer">
            {item.q}
          </summary>
          <p className="mt-2 text-gray-600">{item.a}</p>
        </details>
      ))}
    </div>
  </section>
);

export default FAQSection;
