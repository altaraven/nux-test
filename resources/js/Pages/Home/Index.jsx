import React, {memo, useCallback, useEffect, useState} from 'react'
import {Button, Icon, Paper, Typography} from "@mui/material";
import * as yup from 'yup'
import {Formik, Field, Form} from "formik";
import {TextField} from 'formik-mui';
// import { withRouter } from 'react-router'
import Box from '@mui/material/Box';

const HomeIndex = ({enqueueSnackbar, history}) => {
    const [uniqueLink, setUniqueLink] = useState(null)

    const values = {
        userName: '',
        phoneNumber: '',
    }

    const validationSchema = () => {
        const schema = {
            userName: yup
                .string()
                .required()
                .label('Username'),
            phoneNumber: yup
                .string()
                .required()
                .label('Phonenumber'),
        }

        return yup.object().shape(schema)
    }

    const onSubmit = useCallback(values => {
        setUniqueLink('--UNIQUE LINK GENERATED--')
        console.log('Submit')
    }, [history, enqueueSnackbar])


    return <>
        <h2 className="text-xl font-semibold text-black dark:text-white">Generate unique link</h2>
        {!uniqueLink && (
            <Formik
                initialValues={values}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                // onSubmit={async (values) => {
                //     await new Promise((resolve) => setTimeout(resolve, 500));
                //     alert(JSON.stringify(values, null, 2));
                // }}
            >
                <Form>
                    <Field component={TextField} name="userName" label="Username" type="text"/>
                    <Field component={TextField} name="phoneNumber" label="Phonenumber" type="text"/>
                    <Button type="submit" variant="contained" color="primary">Register</Button>
                </Form>
            </Formik>
        )}
        {uniqueLink ? uniqueLink : null}
    </>
}


export default memo(HomeIndex)
