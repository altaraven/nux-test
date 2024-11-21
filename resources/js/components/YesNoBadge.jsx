import * as React from 'react';
import {Chip} from "@mui/material";

const YesNoBadge = ({value}) => {
    return <>
        {value !== null && (
            <Chip label={value ? 'Yes' : 'No'} size="small" color={value ? 'success' : 'error'}/>
        )}
    </>
}

export default YesNoBadge
