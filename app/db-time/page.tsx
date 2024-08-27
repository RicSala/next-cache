import RevalidateDBTimeButton from '@/app/db-time/Revalidatebutton';
import { getDBTime } from './db-time';
import { revalidateTag } from 'next/cache';
import { RouterRefresh } from '@/app/db-time/RouterRefresh';

export default async function DBTime() {
    const { time, pokemon } = await getDBTime();

    console.log(`Render /db-time ${new Date().toLocaleTimeString()}`);

    async function onRevalidate() {
        'use server';
        console.log('This is running in the server');
        revalidateTag('random thing');
    }

    return (
        <div>
            <h1 className='text-2xl'>Time From DB</h1>
            <p className='text-xl'>{time}</p>
            <p className='text-xl'>{pokemon}</p>
            <RevalidateDBTimeButton onRevalidate={onRevalidate} />
            <RouterRefresh />
        </div>
    );
}
