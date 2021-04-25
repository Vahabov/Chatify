import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Label } from 'semantic-ui-react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import '../../styles/auth/auth.css'
import { useFirebase } from 'react-redux-firebase';


const SigninSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(8, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

const Login = () => {

    const firebase = useFirebase();

    const [submiting, setSubmiting] = useState(false)

    const onSubmitForm = (val) => {
        setSubmiting(true);
    }

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
                    <Button disabled={submiting} type='submit'>Sign in</Button>
                    <Link to='/signup' className="link">
                        Register
            </Link>
                </Form>
            )}
        </Formik>
    )
}

export default Login
