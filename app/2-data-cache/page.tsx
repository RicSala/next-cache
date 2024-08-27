import { Boundary } from '@/app/components/Boundary';
import { NoStoreChild } from '@/app/2-data-cache/fetch/_components/NoStoreChild';
import { RevalidateChild } from '@/app/2-data-cache/fetch/_components/RevalidateChild';
import { fetchRandomUserForceCache } from '@/lib/fetchRandomUserForceCache';
import { ForceCacheChild } from '@/app/2-data-cache/fetch/_components/ForceCacheChild';

export default async function DBTime() {
    console.log(`Render /db-time ${new Date().toLocaleTimeString()}`);
    const user = await fetchRandomUserForceCache();

    return (
        <Boundary label='page'>
            <ForceCacheChild />
            <NoStoreChild />
            <RevalidateChild />
        </Boundary>
    );
}
