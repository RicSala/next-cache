export type BulletsProps = {
    bullets: Bullet[];
};

export type Bullet = string;
export function Bullets({ bullets }: BulletsProps) {
    return (
        <div className='mt-8 flex-1'>
            <ul className='list-disc flex flex-col gap-2'>
                {bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                ))}
            </ul>
        </div>
    );
}
