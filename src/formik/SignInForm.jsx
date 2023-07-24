import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, logOut } from '../redux/slices/authSlice';
import { useGetUserTokenMutation } from '../redux/api/authApi';
import { Formik, Field, Form } from 'formik';
const SignInForm = ({ styles }) => {
    // const [usernameLogin, setUserLogin] = useState('');
    // const [pwd, setPwd] = useState('');
    // const [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate();
    const [loginApi, { isLoading }] = useGetUserTokenMutation();
    const dispatch = useDispatch();
    // useEffect(() => {
    //     setErrMsg('');
    // }, [usernameLogin, pwd]);

    const handleSubmit = async (values, action) => {
        try {
            const userData = await loginApi(values).unwrap();
            console.log(userData);
            dispatch(login({ username: userData.username }));
            navigate('/');
        } catch (err) {
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
                        Sign in
                    </button>
                    {/* <button type="button" onClick={() => setErrMsg('wadawd')}>
                        GET ERROR
                    </button> */}
                    {formikProps.errors.myError}
                </Form>
            )}
        </Formik>
    );
};

export default SignInForm;
