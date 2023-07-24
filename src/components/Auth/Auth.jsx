import React, { useState } from 'react';
// import { useGetUserTokenMutation } from '../../redux/api/authApi';
import styles from './Auth.module.scss';
import SignInForm from '../../formik/SignInForm';
import SignUpForm from '../../formik/SignUpForm';
const Auth = () => {
    const [isLoginShown, setLoginForm] = useState(true);
    // const [getToken, meta] = useGetUserTokenMutation();
    // console.log(meta);
    return (
        <div className={styles.mainDiv}>
            <div className={styles.formStructor}>
                <div
                    className={
                        isLoginShown
                            ? styles.login
                            : `${styles.login} ${styles.slideUp}`
                    }
                    onClick={() => setLoginForm(true)}
                >
                    <div className={styles.center}>
                        <h2 className={styles.formTitle} id="login">
                            {isLoginShown ? null : <span>or</span>}Sign in
                        </h2>
                        <SignInForm styles={styles} />
                    </div>
                </div>
                <div
                    className={
                        isLoginShown
                            ? `${styles.signup} ${styles.slideUp}`
                            : styles.signup
                    }
                    onClick={() => setLoginForm(false)}
                >
                    <div className={styles.center}>
                        <h2 className={styles.formTitle} id="signup">
                            {isLoginShown ? <span>or</span> : null}Sign up
                        </h2>
                        <SignUpForm styles={styles} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
