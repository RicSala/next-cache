import { Boundary } from '@/app/components/Boundary';
import Image from 'next/image';
import { Faq, Faqs } from '@/components/Faqs';
import { Bullet, Bullets } from '@/components/Bullets';
import { User } from '@/components/User';
import { fetchRandomUserForceCache } from '@/lib/fetchRandomUserForceCache';
import { RefreshButton } from '@/components/RefreshButton';
import { RevalidateButton } from '@/components/RevalidateButton';
import Link from 'next/link';

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const user = await fetchRandomUserForceCache();
    return (
        <div className='flex flex-col gap-8'>
            <h1 className='text-2xl'>Router Cache (@Server)</h1>
            <p>
                Stores the RSC payload of route segments, split by layouts,
                loading states, and pages. Check{' '}
                <Link
                    href={
                        'https://nextjs-app-router-training.vercel.app/examples/router-cache'
                    }
                >
                    Hiroppy awesome repo
                </Link>
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
    'Duration: 1. Session (clear upo page refresh)',
    'Automatic invalidation: static page or prefetched page',
    'A page refresh (and a router.refresh) will clear the whole cache',
    'Invalidation:',
    'router.refresh() --> clears the cache and makes a request to get the latest data',
    'Server actions: revalidatePath() or revalidateTag() --> clear the data cache AND the router cache',
    'Server actions: cookies.set or cookies.delete --> Preven routes that use cookies from becomin stale',
    '?? OPT OUT BY DEFAULT??',
];
