'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export type FaqsProps = { faqs: Faq[] };

export type Faq = {
    question: string;
    answer: string;
};

export function Faqs({ faqs }: FaqsProps) {
    return (
        <Accordion type='single' collapsible className='w-full'>
            {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
