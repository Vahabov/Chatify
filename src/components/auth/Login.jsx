import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Label, Message } from 'semantic-ui-react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import '../../styles/auth/auth.css'
import { useFirebase } from 'react-redux-firebase';


const SigninSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(7, ({ min }) => `Password must be at least ${min} characters`)
        .required('Required'),
});

const Login = () => {

    const firebase = useFirebase();

    const [submiting, setSubmiting] = useState(false);

    const [fbErrors, setFbErrors] = useState([]);

    const onSubmitForm = ({ name, email, password }) => {
        setSubmiting(true);
        setFbErrors([]);

        firebase.login({ email, password })
            .then((data) => {
                console.log(data)
            }).catch((err) => {
                setFbErrors([{ message: err.message }])
            }).finally(() => {
                setSubmiting(false);
            })
    }

    const displayErrors = () =>
        fbErrors.map((error, index) => <p key={index}>{error.message}</p>);

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={SigninSchema}
            onSubmit={onSubmitForm}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
            }) => (
                <Form className="authForm" onSubmit={handleSubmit}>
                    <h2 className="title">Sign in </h2>
                    <Form.Field>
                        <label>Email</label>
                        <input
                            placeholder='E-mail'
                            name='email'
                            type='email'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {
                            (errors.email && touched.email && errors.email) &&
                            <Label basic color='red' pointing>
                                {errors.email && touched.email && errors.email}
                            </Label>
                        }

                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input
                            placeholder='Password'
                            name='password'
                            type="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        {
                            (errors.password && touched.password && errors.password) &&
                            <Label basic color='red' pointing>
                                {errors.password && touched.password && errors.password}
                            </Label>
                        }
                    </Form.Field>

                    {
                        fbErrors.length > 0 &&
                        <Message color='red'>{displayErrors()}</Message>
                    }

                    <Button disabled={submiting} type='submit'>Sign in</Button>
                    <Link to='/signup' className="link">Register</Link>
                </Form>
            )}
        </Formik>
    )
}

export default Login
