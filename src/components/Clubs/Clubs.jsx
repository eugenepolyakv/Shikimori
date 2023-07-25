import React from 'react';
import { useGetUsersQuery } from '../../redux/api/authApi';
const Clubs = () => {
    const { data, isLoading, error } = useGetUsersQuery();
    return (
        <div>
            {error ? (
                <div>{error.data.message}</div>
            ) : isLoading ? (
                '...Loading'
            ) : (
                data.users.map((e) => <div>{e.username}</div>)
            )}
        </div>
    );
};

export default Clubs;
