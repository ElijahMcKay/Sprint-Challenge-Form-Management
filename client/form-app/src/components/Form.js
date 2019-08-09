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
            username: username || '',
            password: password || '',
        }
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().min(5, "Username must be longer than 5 characters.").required("Username is required"),
        password: Yup.string().min(6, "Password must be 6 characters or longer").required("Password is required")
    }),

    handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus }) {
        // console.log(values); 
        //HTTP REQUEST

        if (values.email === "alreadytaken@atb.dev") {
            setErrors({ email: "That email is already taken" }); 
        } else {
            axios  
                .post("http://localhost:5000/api/register", values)
                .then(res => {
                    console.log(res);
                    setSubmitting(false); 
                    setStatus(res.data) 
                    resetForm();  
                })
                .catch(err => {
                    console.log(err); 
                    setSubmitting(false); 
                }); 

            axios
                .get('http://localhost:5000/api/restricted/data') 
                .then(res => {
                    console.log(res); 
                    setStatus(res.data); 
                })
            }
        }
    })(UserForm); 



export default FormikUserForm; 
