import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useRegistrationMutation } from '../redux/api/authApi';
import loadingCircle from '../assets/loadingCircle.gif';
const SignUpForm = ({ styles, setLoginForm }) => {
    const [registrationApi, { isLoading }] = useRegistrationMutation();
    const handleSubmit = async (values, action) => {
        try {
            await registrationApi({
                username: values.signUpUsername,
                password: values.signUpPassword,
            }).unwrap();
            setLoginForm(true);
        } catch (e) {
            console.log(e);
        }
    };
    const SignUpValidationSchema = Yup.object().shape({
        signUpUsername: Yup.string()
            .min(5, 'At least 5 symbols!')
            .max(30, 'No more than 30 symbols')
            .required('Required'),
        signUpPassword: Yup.string()
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
            initialValues={{ signUpUsername: '', signUpPassword: '' }}
            onSubmit={handleSubmit}
            validationSchema={SignUpValidationSchema}
            validateOnChange={false}
            validateOnBlur={false}
        >
            {(formikProps) => (
                <Form
                    onChange={(e) => customHandleChange(e, formikProps)}
                    className={styles.formHolder}
                >
                    <Field
                        className={
                            formikProps.errors.signUpUsername
                                ? `${styles.input} ${styles.error}`
                                : styles.input
                        }
                        id="signUpUsername"
                        name="signUpUsername"
                        placeholder="Login"
                    />
                    <div className={styles.errorMessage}>
                        {formikProps.errors.signUpUsername}
                    </div>
                    <Field
                        className={
                            formikProps.errors.signUpPassword
                                ? `${styles.input} ${styles.error}`
                                : styles.input
                        }
                        type="password"
                        id="signUpPassword"
                        name="signUpPassword"
                        placeholder="Password"
                    />
                    <div className={styles.errorMessage}>
                        {formikProps.errors.signUpPassword}
                    </div>
                    <button className={styles.submitBtn} type="submit">
                        {isLoading ? (
                            <img
                                style={{ height: '20px' }}
                                src={loadingCircle}
                            />
                        ) : (
                            'Sign Up'
                        )}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default SignUpForm;
