import React, {memo, useCallback, useState} from 'react'
import {Button, Link} from "@mui/material";
import * as yup from 'yup'
import {Formik, Field, Form} from "formik";
import {TextField} from 'formik-mui';
import {enqueueSnackbar} from 'notistack';
import {postGenerateGameLink, getApiErrorFromResponse} from "../../api/index.js";
import "yup-phone-lite";

const HomeIndex = ({history}) => {
    const [linkData, setLinkData] = useState({})

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
                .phone('UA')
                .required()
                .label('Phonenumber'),
        }

        return yup.object().shape(schema)
    }

    const onSubmit = useCallback(values => {
        const userName = values.userName
        const phoneNumber = values.phoneNumber

        return postGenerateGameLink(userName, phoneNumber)
            .then(({data}) => {
                setLinkData(data.data)
                enqueueSnackbar('Game link successfully generated', {variant: 'success'})
            })
            .catch(({response}) => enqueueSnackbar(getApiErrorFromResponse(response), {variant: 'error'}))
    }, [history, enqueueSnackbar])


    return <>
        {!linkData.link && (
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
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base/7 font-semibold text-gray-900">Generate unique link</h2>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <div className="mt-6">
                                        <Field component={TextField} name="userName" label="Username" type="text"/>
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <div className="mt-6">
                                        <Field component={TextField} name="phoneNumber" label="Phonenumber"
                                               type="text"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <Button type="submit" variant="contained" color="primary">Register</Button>
                    </div>
                </Form>
            </Formik>
        )}
        {linkData.link && <Link href={linkData.link}>Game link</Link>}
    </>
}

export default memo(HomeIndex)
