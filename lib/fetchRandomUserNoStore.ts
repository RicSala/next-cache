export const fetchRandomUserNoStore = async (qs?: string) => {
    const userResponse = await fetch(`https://randomuser.me/api?q=${qs}`, {
        // don't store as a cache to understand Request Memoization clarify
        // this "cache" stage is Data Cache
        cache: 'no-store',
    });
    const user: ApiResponse = await userResponse.json();
    return user.results[0];
};
