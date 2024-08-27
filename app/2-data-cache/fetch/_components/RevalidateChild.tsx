import { Boundary } from '@/app/components/Boundary';
import { User } from '@/components/User';
import { fetchRandomUserRevalidate } from '@/lib/fetchRandomUserRevalidate';

type RevalidateChildProps = {};
export async function RevalidateChild(props: RevalidateChildProps) {
    const user = await fetchRandomUserRevalidate();

    return (
        <Boundary label='revalidate child'>
            <User user={user} />
        </Boundary>
    );
}
