// interface FAQ {
//   q: string;
//   a: string;
// }

// interface FAQSectionProps {
//   faq: FAQ[];
// }

// const FAQSection = ({ faq }: FAQSectionProps) => (
//   <section className="py-12 border-t border-gray-100">
//     <h2 className="text-2xl font-semibold mb-6">FAQ</h2>
//     <div className="space-y-4">
//       {faq.map((item, index) => (
//         <details
//           key={index}
//           className="group border border-gray-200 rounded-xl p-4"
//         >
//           <summary className="font-semibold cursor-pointer">
//             {item.q}
//           </summary>
//           <p className="mt-2 text-gray-600">{item.a}</p>
//         </details>
//       ))}
//     </div>
//   </section>
// );

// export default FAQSection;


// components/Courses/FAQSection.tsx
interface FAQ { q: string; a: string }
interface Props { faq: FAQ[] }

const FAQSection = ({ faq }: Props) => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions (FAQ)</h2>

      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm max-h-[360px] overflow-y-auto hide-scrollbar space-y-3">
        {faq.map((item, idx) => (
          <details key={idx} className="group border border-gray-100 rounded-lg p-3">
            <summary className="font-medium cursor-pointer">{item.q}</summary>
            <p className="mt-2 text-gray-600">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
