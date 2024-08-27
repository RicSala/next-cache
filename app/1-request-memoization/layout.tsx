import { Boundary } from '@/app/components/Boundary';
import Image from 'next/image';
import { Faq, Faqs } from '@/components/Faqs';
import { fetchRandomUserNoStore } from '@/lib/fetchRandomUserNoStore';
import { Bullet, Bullets } from '@/components/Bullets';
import { User } from '@/components/User';

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const user = await fetchRandomUserNoStore();
    return (
        <div className='flex flex-col gap-8'>
            <h1 className='text-2xl'>Request Memoization (@Server)</h1>
            <p></p>
            <div className='flex items-start'>
                <div className='mt-8 flex-1'>
                    <Bullets bullets={bullets} />
                </div>
                <div className='flex-1'>
                    <Boundary label='layout'>
                        <User user={user} />
                        {children}
                    </Boundary>
                </div>
            </div>
            <Image
                src='/images/request-memoization.avif'
                width={1200}
                height={300}
                alt='request memoization diagram'
                className='rounded-xl'
            />
            <Faqs faqs={faqs} />
        </div>
    );
}

const faqs: Faq[] = [
    {
        question: 'What is request memoization?',
        answer: `Request memoization is a feature in Next.js that automatically caches API requests in the server. It only lasts for the request lifecycle and only works with GET requests.`,
    },
];

const bullets: Bullet[] = [
    'Request memoization is a React feature (no Nextjs)',
    'React extends the fetch API to automatically memoize requests',
    'Request memoization happens in the server',
    'With internal OR external API',
    'Only last the request lifecycle',
    'Only GET method',
    'Only React component tree (Layouts, pages, and other server comps). No routes.',
    'Revalidation: Not needed (only last the request)',
];
