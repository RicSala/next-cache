import { Boundary } from '@/app/components/Boundary';
import { User } from '@/components/User';
import { fetchRandomUserForceCache } from '@/lib/fetchRandomUserForceCache';

type ForceCacheChildProps = {};
export async function ForceCacheChild(props: ForceCacheChildProps) {
    const user = await fetchRandomUserForceCache();

    return (
        <Boundary label='force-cache child'>
            <p>
                <User user={user} />
            </p>
        </Boundary>
    );
}
