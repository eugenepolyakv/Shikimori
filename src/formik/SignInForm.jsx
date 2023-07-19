import React from 'react';
import { Formik, Field, Form } from 'formik';
const SignInForm = ({ styles }) => {
    return (
        <Formik
            initialValues={{ login: '', password: '' }}
            onSubmit={(values) => console.log(values)}
        >
            <Form className={styles.formHolder}>
                <Field
                    className={styles.input}
                    id="login"
                    name="login"
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
            </Form>
        </Formik>
    );
};

export default SignInForm;
