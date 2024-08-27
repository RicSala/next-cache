import { getDBTime } from './db-time';

export default async function DBTime() {
    const { time } = await getDBTime();

    console.log(`Render /db-time ${new Date().toLocaleTimeString()}`);

    return (
        <div>
            <h1 className='text-2xl'>Time From DB</h1>
            <p className='text-xl'>{time}</p>
        </div>
    );
}
