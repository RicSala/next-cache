import { Boundary } from '@/app/components/Boundary';
import { RefreshButton } from '@/components/RefreshButton';
import { NoStoreChild } from '@/app/2-data-cache/fetch/_components/NoStoreChild';

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='flex flex-col gap-8'>
            <div className='flex-1'>
                <Boundary label='dynamic layout'>
                    <p>
                        With dynamic layout, the children (not pages) that were
                        supposed to be static are still static... why is that?
                    </p>
                    <RefreshButton />
                    <NoStoreChild />
                    {children}
                </Boundary>
            </div>
        </div>
    );
}
