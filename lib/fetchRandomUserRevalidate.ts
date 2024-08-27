export const fetchRandomUserRevalidate = async (qs?: string) => {
    const userResponse = await fetch(`https://randomuser.me/api?q=${qs}`, {
        next: {
            revalidate: 5,
        },
    });
    const user: ApiResponse = await userResponse.json();
    return user.results[0];
};
