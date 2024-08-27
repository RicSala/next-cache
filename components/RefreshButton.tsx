'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

type RefreshButtonProps = {};
export function RefreshButton(props: RefreshButtonProps) {
    const router = useRouter();

    return <Button onClick={router.refresh}>Refresh</Button>;
}
