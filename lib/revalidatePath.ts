'use server';

import { revalidatePath } from 'next/cache';
import path from 'path';

export const revalidatePathAction = async (path: string) => {
    revalidatePath(path);
};
