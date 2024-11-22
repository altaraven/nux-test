import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import YesNoBadge from "./YesNoBadge.jsx";

const BetsHistoryTable = ({ rows }) => {
    return <>
        <TableContainer style={{marginTop: '1rem'}} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Dice&nbsp;result</TableCell>
                        <TableCell align="center">Is&nbsp;win?</TableCell>
                        <TableCell align="right">Amount&nbsp;won</TableCell>
                        <TableCell align="right">Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.diceResult}
                            </TableCell>
                            <TableCell align="center"><YesNoBadge value={row.isWin} /></TableCell>
                            <TableCell align="right">{row.amount}</TableCell>
                            <TableCell align="right">{row.createdAt}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
}

export default BetsHistoryTable
