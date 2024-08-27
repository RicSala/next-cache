'use client';

import { Button } from '@/components/ui/button';
import { revalidatePathAction } from '@/lib/revalidatePath';
import { usePathname } from 'next/navigation';

type RevalidateButtonProps = {};
export function RevalidateButton({}: RevalidateButtonProps) {
    const pathName = usePathname();

    return (
        <Button onClick={() => revalidatePathAction(pathName)}>
            Revalidate
        </Button>
    );
}
