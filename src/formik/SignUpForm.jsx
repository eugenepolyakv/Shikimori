import React from 'react';
import { Formik, Field, Form } from 'formik';
const SignUpForm = ({ styles }) => {
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
                    Sign up
                </button>
            </Form>
        </Formik>
    );
};

export default SignUpForm;
