import { Boundary } from '@/app/components/Boundary';
import Image from 'next/image';
import { Faq, Faqs } from '@/components/Faqs';
import { Bullet, Bullets } from '@/components/Bullets';
import { User } from '@/components/User';
import { fetchRandomUserForceCache } from '@/lib/fetchRandomUserForceCache';
import { RefreshButton } from '@/components/RefreshButton';
import { RevalidateButton } from '@/components/RevalidateButton';

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const user = await fetchRandomUserForceCache();
    return (
        <div className='flex flex-col gap-8'>
            <h1 className='text-2xl'>Data cache (@Server)</h1>
            <p>
                Persists the result of data fetches across incoming{' '}
                <strong>server requests</strong> and{' '}
                <strong>deployments</strong>
            </p>
            <div className='flex items-start'>
                <div className='mt-8 flex-1'>
                    <Bullets bullets={bullets} />
                </div>
                <div className='flex-1'>
                    <Boundary label='layout'>
                        <RefreshButton />
                        <RevalidateButton />
                        <User user={user} />
                        {children}
                    </Boundary>
                </div>
            </div>
            <Image
                src='/images/data-cache.avif'
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
        question: '',
        answer: ``,
    },
];

const bullets: Bullet[] = [
    'Request memoization avoided duplicate fetches during the same request...',
    '...data cache is persistent across incoming requests and deployments unless you revalidate or opt-out',
    'By default, requests that use fetch are not cached. Cache and next.revalidate options to configure',
    'Revalidating: Time-based or manual revalidation',
    'Time based: fetch("https://...", { next: { revalidate: 3600 } })',
    'Manual: next.revalidateTag("tag")',
    '',
    'IS IT SHARED AMONG DIFFERENT USERS? I THINK SO',
    'available in Layout, Pages, and Route Handlers, not Middleware.',
    'VERCEL DATA CACHE: https://vercel.com/docs/infrastructure/data-cache',
    'fetch requests (IN DIFF REQUEST) are not cached by default, you dont need to opt out of caching. This means data will be fetched from your data source whenever fetch is called.',
];
