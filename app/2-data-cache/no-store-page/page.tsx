import { Boundary } from '@/app/components/Boundary';
import { NoStoreChild } from '@/app/2-data-cache/fetch/_components/NoStoreChild';
import { fetchRandomUserForceCache } from '@/lib/fetchRandomUserForceCache';

export default async function DBTime() {
    console.log(`Render /db-time ${new Date().toLocaleTimeString()}`);
    const user = await fetchRandomUserForceCache();

    // Other ways to force dynamically generated pages:

    // export const dynamic = 'force-dynamic';
    // 'auto' | 'force-dynamic' | 'error' | 'force-static'

    // export const fetchCache = 'force-no-store';
    // 'auto' | 'default-cache' | 'only-cache' | 'force-cache' | 'force-no-store' | 'default-no-store' | 'only-no-store'

    //   unstable_noStore();

    return (
        <Boundary label='page'>
            <p>
                As this page is using a no store fetch, it will be dynamically
                generated
            </p>
            <NoStoreChild />
        </Boundary>
    );
}
