import { Boundary } from '@/app/components/Boundary';
import { User } from '@/components/User';
import { fetchRandomUserForceCache } from '@/lib/fetchRandomUserForceCache';

export default async function DBTime() {
    console.log(`Render /db-time ${new Date().toLocaleTimeString()}`);
    const user = await fetchRandomUserForceCache();

    return (
        <Boundary label='page'>
            <p>
                As this page is using a fetch with force cache, it will be
                statically generated and will not be revalidated.
            </p>
            <p>👇🏻 force-cache</p>
            <User user={user} />
        </Boundary>
    );
}
