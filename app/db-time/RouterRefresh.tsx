'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

type RouterRefreshProps = {};
export function RouterRefresh({}: RouterRefreshProps) {
    const router = useRouter();

    return <Button onClick={() => router.refresh()}>Router Refresh</Button>;
}
