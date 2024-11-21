import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import YesNoBadge from "./YesNoBadge.jsx";

const GameResultArea = ({ data }) => {
    return <>
        <TableContainer component={Paper}>
            <Table>
                <TableBody>
                    <TableRow><TableCell>Dice result</TableCell><TableCell>{data.diceResult}</TableCell></TableRow>
                    <TableRow><TableCell>Is win?</TableCell><TableCell><YesNoBadge value={data.isWin} /></TableCell></TableRow>
                    <TableRow><TableCell>Amount won</TableCell><TableCell>{data.amount}</TableCell></TableRow>
                    <TableRow><TableCell>Date</TableCell><TableCell>{data.createdAt}</TableCell></TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </>
}

export default GameResultArea
