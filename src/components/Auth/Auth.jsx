import React, { useState } from 'react';
import { useGetUserTokenMutation } from '../../redux/api/authApi';
import styles from './Auth.module.scss';
import lock from '../../assets/lock.svg';
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
                        <div className={styles.formHolder}>
                            <input
                                type="login"
                                className={styles.input}
                                placeholder="Login"
                            />
                            <input
                                type="password"
                                className={styles.input}
                                placeholder="Password"
                            />
                        </div>
                        <button className={styles.submitBtn}>Sign in</button>
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
                        <div className={styles.formHolder}>
                            <input
                                type="login"
                                className={styles.input}
                                placeholder="Login"
                            />
                            <input
                                type="password"
                                className={styles.input}
                                placeholder="Password"
                            />
                        </div>
                        <button className={styles.submitBtn}>Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
