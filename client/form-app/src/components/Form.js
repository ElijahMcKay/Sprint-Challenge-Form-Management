import React from 'react';
import { withFormik, Form, Field } from "formik"; 
import * as Yup from "yup"; 
import axios from "axios"; 

function UserForm({ values, errors, touched, isSubmitting }){

    return (
        <Form>
            <div>
                {touched.username && errors.username && <p>{errors.username}</p>}
                <Field 
                name="username"
                placeholder="Username"
                />
            </div>
            <div>
                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field
                name="password"
                type="password"
                placeholder="Password"
                />
            </div>
            <button disabled={isSubmitting}>Submit!</button>
        </Form>
    )
}

const FormikUserForm = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            name: username || '',
            password: password || '',
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().min(5, "Username must be longer than 5 characters.").required("Name is required"),
        email: Yup.string().email("Email is not valid").required("Email is required"),
        password: Yup.string().min(6, "Password must be 6 characters or longer").required("Password is required"),
        tos: Yup.bool()
        .oneOf([true], 'You must accept the terms')
        .required('You have to agree with our terms')
    }),


export default FormikUserForm; 
