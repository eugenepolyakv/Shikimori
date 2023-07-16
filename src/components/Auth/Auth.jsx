import React, { useState } from 'react';
import { useGetUserTokenMutation } from '../../redux/api/authApi';

const Auth = () => {
    // const [isButtonClicked, setButtonClicked] = useState(false);
    // const { data } = useGetUserTokenQuery(skipToken);
    // const { data } = useGetUserTokenMutation();
    // console.log(data);
    const [getToken, meta] = useGetUserTokenMutation();
    console.log(meta);
    return (
        <div>
            <button onClick={() => getToken({ value: 1 })}>
                GET USER TOKEN
            </button>
        </div>
    );
};

export default Auth;
