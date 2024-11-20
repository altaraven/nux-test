import React, {memo, useCallback, useState, useEffect} from 'react'
import {Button, Link} from "@mui/material";
import * as yup from 'yup'
import {Formik, Field, Form} from "formik";
import {TextField} from 'formik-mui';
import {enqueueSnackbar} from 'notistack';
import {postGenerateGameLink, getApiErrorFromResponse, loadGameLinkData} from "../../api/index.js";
import {withParams} from "../../components/WithParams.jsx";

const GameIndex = ({params}) => {

    // console.log('hash')
    // console.log(params)
    // console.log(params.hash)
    const [linkData, setLinkData] = useState({})

    useEffect(() => {
        // setLoading(true)

        loadGameLinkData(params.hash)
            .then(({ data }) => setLinkData(data.data))
            // .finally(() => setLoading(false))
    }, [params, setLinkData])

    //
    // const values = {
    //     userName: '',
    //     phoneNumber: '',
    // }

    // const validationSchema = () => {
    //     const schema = {
    //         userName: yup
    //             .string()
    //             .required()
    //             .label('Username'),
    //         phoneNumber: yup
    //             .string()
    //             .required()
    //             .label('Phonenumber'),
    //     }
    //
    //     return yup.object().shape(schema)
    // }

    // const onSubmit = useCallback(values => {
    //     const userName = values.userName
    //     const phoneNumber = values.phoneNumber
    //
    //     return postGenerateGameLink(userName, phoneNumber)
    //         .then(({data}) => {
    //             setLinkData(data.data)
    //             enqueueSnackbar('Game link successfully generated', {variant: 'success'})
    //         })
    //         .catch(({response}) => enqueueSnackbar(getApiErrorFromResponse(response), {variant: 'error'}))
    // }, [history, enqueueSnackbar])


    return <>
        <div>{linkData.userName}</div>
        <div>{linkData.hash}</div>
    </>
}

export default withParams(memo(GameIndex))
