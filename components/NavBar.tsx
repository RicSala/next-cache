import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

type NavBarProps = {};
export function NavBar(props: NavBarProps) {
    return (
        <div>
            <ul className='flex items-center gap-4 justify-center'>
                <li>
                    <Link
                        className={buttonVariants()}
                        href={'/1-request-memoization'}
                    >
                        Request Memoization
                    </Link>
                </li>
                <li>
                    <Link
                        className={buttonVariants()}
                        href={'/2-data-cache/fetch'}
                    >
                        Data Cache
                    </Link>
                </li>
            </ul>
        </div>
    );
}
