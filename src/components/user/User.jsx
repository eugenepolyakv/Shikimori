import { useSelector } from 'react-redux';
import { useActions } from '../../customHooks/useActions';

function User(props) {
    const state = useSelector((state) => state.user);
    const { getUsersById } = useActions();

    return (
        <div>
            <button onClick={() => getUsersById()}>Get User</button>
            {state.isLoading ? (
                <div>Loading...</div>
            ) : state.error ? (
                <div>{state.error.message}</div>
            ) : state.user.name ? (
                <h1>User: {state.user.name}</h1>
            ) : (
                <div>USER NOT FOUND</div>
            )}
        </div>
    );
}

export default User;
