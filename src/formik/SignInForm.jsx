import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, logOut } from '../redux/slices/authSlice';
import { useGetUserTokenMutation } from '../redux/api/authApi';
import { Formik, Field, Form } from 'formik';
import loadingCircle from '../assets/loadingCircle.gif';
// import ErrorPopUp from '../components/Other/ErrorPopUp/ErrorPopUp';
import { notificationThunk } from '../redux/thunks/notificationThunk';
import * as Yup from 'yup';
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
                    regDate: userData.regDate,
                })
            );
            dispatch(
                notificationThunk({
                    message: 'You have successfully signed in',
                    type: 'SUCCESS',
                })
            );
            navigate('/');
        } catch (err) {
            console.log(err);
            dispatch(
                notificationThunk({
                    message: err.data.message,
                    type: 'ERROR',
                })
            );
            // action.setFieldError('myError', err.data.message);
        }
    };
    // const handleSubmit = () => {
    //     dispatch(notificationThunk({ message: 'SOME TEXT', type: 'ERROR' }));
    // };
    const SignInValidationSchema = Yup.object().shape({
        username: Yup.string()
            .min(5, 'At least 5 symbols!')
            .max(30, 'No more than 30 symbols')
            .required('Required'),
        password: Yup.string()
            .min(5, 'At least 5 symbols!')
            .max(30, 'No more than 30 symbols')
            .required('Required'),
    });
    const customHandleChange = (e, formikAPI) => {
        formikAPI.setFieldError(e.target.id, undefined);
        formikAPI.handleChange(e);
    };
    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={
                (values, actions) => handleSubmit(values, actions)
                // actions.setFieldError('myError', 'GENERAL ERROR')
            }
            validationSchema={SignInValidationSchema}
            validateOnChange={false}
            validateOnBlur={false}
        >
            {(formikProps) => (
                <Form
                    onChange={(e) => customHandleChange(e, formikProps)}
                    className={styles.formHolder}
                >
                    {/* {formikProps.touched.username} */}
                    <Field
                        // className={styles.error + ' ' + styles.input}
                        className={
                            formikProps.errors.username
                                ? `${styles.input} ${styles.error}`
                                : styles.input
                        }
                        id="username"
                        name="username"
                        placeholder="Login"
                    />
                    <div className={styles.errorMessage}>
                        {formikProps.errors.username}
                    </div>
                    <Field
                        className={
                            formikProps.errors.password
                                ? `${styles.input} ${styles.error}`
                                : styles.input
                        }
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                    />
                    <div className={styles.errorMessage}>
                        {formikProps.errors.password}
                    </div>

                    <button className={styles.submitBtn} type="submit">
                        {/* <img style={{ height: '10px' }} src={loadingCircle} /> */}
                        {isLoading ? (
                            <img
                                style={{ height: '10px' }}
                                src={loadingCircle}
                            />
                        ) : (
                            'Sign In'
                        )}
                    </button>
                    {/* <button type="button" onClick={() => setErrMsg('wadawd')}>
                        GET ERROR
                    </button> */}
                    {/* <div style={{ height: '40px', overflow: 'visible' }}>
                        {formikProps.errors.myError}
                    </div> */}
                </Form>
            )}
        </Formik>
    );
};

export default SignInForm;
