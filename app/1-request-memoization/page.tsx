import { Boundary } from '@/app/components/Boundary';
import { Child } from '@/app/1-request-memoization/_components/Child';
import { fetchRandomUserNoStore } from '@/lib/fetchRandomUserNoStore';
import { User } from '@/components/User';

export default async function DBTime() {
    console.log(`Render /db-time ${new Date().toLocaleTimeString()}`);
    const user = await fetchRandomUserNoStore();

    return (
        <Boundary label='page'>
            <User user={user} />
            <Child label='child' />
            <Child label='child with qs' qs='some-qs' />
        </Boundary>
    );
}
