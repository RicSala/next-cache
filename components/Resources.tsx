import Link from 'next/link';

type ResourcesProps = {};
export function Resources(props: ResourcesProps) {
    return (
        <div className='flex flex-col gap-2'>
            <h2>Resources</h2>
            <Link href='https://nextjs.org/docs/app/building-your-application/caching'>
                Next.js Docs
            </Link>
            <Link href='https://www.pronextjs.dev/workshops/next-js-react-server-component-rsc-architecture-jbvxk/the-next-js-router-cache-tkm4i'>
                Pro Next.js
            </Link>
            <Link href='https://github.com/vercel/next.js/discussions/54075'>
                GitHub Discussions
            </Link>
            <Link href='https://blog.webdevsimplified.com/2024-01/next-js-app-router-cache/'>
                Web Dev Simplified
            </Link>
            <Link href='https://nextjs-app-router-training.vercel.app/examples/request-memoization'>
                Hiroppy`s Router Cache
            </Link>
            <Link href='https://app-router.vercel.app/'>Vercel playground</Link>
        </div>
    );
}
