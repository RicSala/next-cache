export const fetchRandomUserForceCache = async (qs?: string) => {
    const userResponse = await fetch(`https://randomuser.me/api?q=${qs}`, {
        cache: 'force-cache',
    });
    const user: ApiResponse = await userResponse.json();
    return user.results[0];
};
