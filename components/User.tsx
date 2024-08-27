type UserProps = {
    user: User;
};
export function User({ user }: UserProps) {
    return (
        <p>
            {user.name.first} {user.name.last}
        </p>
    );
}
