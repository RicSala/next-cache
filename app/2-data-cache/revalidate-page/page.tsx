import { Boundary } from '@/app/components/Boundary';
import { RevalidateChild } from '@/app/2-data-cache/fetch/_components/RevalidateChild';
import { fetchRandomUserForceCache } from '@/lib/fetchRandomUserForceCache';

export default async function DBTime() {
    console.log(`Render /db-time ${new Date().toLocaleTimeString()}`);
    const user = await fetchRandomUserForceCache();

    return (
        <Boundary label='page'>
            <p>
                As this page is using a revalidate fetch, it will be statically
                generated and will be revalidated.
            </p>
            <RevalidateChild />
        </Boundary>
    );
}
