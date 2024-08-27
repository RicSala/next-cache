import { Boundary } from '@/app/components/Boundary';
import { User } from '@/components/User';
import { fetchRandomUserNoStore } from '@/lib/fetchRandomUserNoStore';

type NoStoreChildProps = {};
export async function NoStoreChild(props: NoStoreChildProps) {
    const user = await fetchRandomUserNoStore();

    return (
        <Boundary label='no-store child'>
            <p>
                <User user={user} />
            </p>
        </Boundary>
    );
}
