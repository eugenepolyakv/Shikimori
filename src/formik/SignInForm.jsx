import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, logOut } from '../redux/slices/authSlice';
import { useGetUserTokenMutation } from '../redux/api/authApi';
import { Formik, Field, Form } from 'formik';
import loadingCircle from '../assets/loadingCircle.gif';
import ErrorPopUp from '../components/Other/ErrorPopUp/ErrorPopUp';
const SignInForm = ({ styles }) => {
    const navigate = useNavigate();
    const [loginApi, { isLoading }] = useGetUserTokenMutation();
    const dispatch = useDispatch();

    const handleSubmit = async (values, action) => {
        try {
            const userData = await loginApi(values).unwrap();
            localStorage.setItem('token', userData.tokens.accessToken);
            dispatch(
                login({
                    username: userData.username,
                })
            );
            navigate('/');
        } catch (err) {
            console.log(err);
            action.setFieldError('myError', err.data.message);
        }
    };
    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={
                (values, actions) => handleSubmit(values, actions)
                // actions.setFieldError('myError', 'GENERAL ERROR')
            }
        >
            {(formikProps) => (
                <Form className={styles.formHolder}>
                    <Field
                        className={styles.input}
                        id="username"
                        name="username"
                        placeholder="Login"
                    />
                    <Field
                        className={styles.input}
                        id="password"
                        name="password"
                        placeholder="Password"
                    />
                    <button className={styles.submitBtn} type="submit">
                        {isLoading ? (
                            <img
                                style={{ height: '20px' }}
                                src={loadingCircle}
                            />
                        ) : (
                            'Sign In'
                        )}
                        {/* Sign in */}
                    </button>
                    {/* <button type="button" onClick={() => setErrMsg('wadawd')}>
                        GET ERROR
                    </button> */}
                    <div style={{ height: '40px', overflow: 'visible' }}>
                        {formikProps.errors.myError}
                        {/* {formikProps.errors.myError ? (
                            <ErrorPopUp
                                errorMessage={formikProps.errors.myError}
                            />
                        ) : null} */}
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default SignInForm;
