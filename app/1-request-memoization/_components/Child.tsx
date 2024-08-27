import { Boundary } from '@/app/components/Boundary';
import { User } from '@/components/User';
import { fetchRandomUserNoStore } from '@/lib/fetchRandomUserNoStore';

type Props = {
    label: string;
    qs?: string;
};

export async function Child({ label, qs }: Props) {
    const user = await fetchRandomUserNoStore(qs);

    return (
        <Boundary label={label}>
            <User user={user} />
        </Boundary>
    );
}
