import React, { memo, useCallback, useEffect, useState } from 'react'
// import { withRouter } from 'react-router'

const UsersIndex = ({ enqueueSnackbar, history }) => {
    return <>
        <h2 className="text-xl font-semibold text-black dark:text-white">Hello world. Users INDEX2</h2>

        <p className="mt-4 text-sm/relaxed">
            Laravel has wonderful documentation covering every aspect of the framework. Whether
            you are a newcomer or have prior experience with Laravel, we recommend reading our
            documentation from beginning to end.
        </p>
    </>
}


export default memo(UsersIndex)
