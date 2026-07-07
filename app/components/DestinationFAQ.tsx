'use client';

import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

type DestinationFAQProps = {
  city: string;
  items: FAQItem[];
};

export default function DestinationFAQ({ city, items }: DestinationFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Questions fréquentes sur le transfert vers {city}
          </h2>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <details
              key={index}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-amber-300 hover:bg-amber-50"
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
                <span>{item.question}</span>
                <span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-600 group-open:bg-amber-600 group-open:text-white">
                  +
                </span>
              </summary>
              <p className="mt-4 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
