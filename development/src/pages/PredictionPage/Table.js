import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function createData(playerName, predicteScore, probability, carbs, protein) {
  return { playerName, predicteScore, probability, carbs, protein };
}

const rows = [
  createData('Rorith Sharma', 89, '78%'),
  createData('Rorith Sharma', 89, '78%'),
  createData('Rorith Sharma', 89, '78%'),
  createData('Rorith Sharma', 89, '78%'),
  createData('Rorith Sharma', 89, '78%'),
  createData('Rorith Sharma', 89, '78%'),
  createData('Rorith Sharma', 89, '78%'),
  createData('Rorith Sharma', 89, '78%'),
  createData('Rorith Sharma', 89, '78%'),
];

export default function BasicTable() {
  return (
        <Grid container justifyContent="center">
            <TableContainer sx={{ width: '80%'}} component={Paper}  >
                <Table sx={{ minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell align="center"><h3>Player's Name</h3></TableCell>
                    <TableCell align="center"><h3>Predicted Score</h3></TableCell>
                    <TableCell align="center"><h3>Probability</h3></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="center" component="th" scope="row">
                            {row.playerName}
                        </TableCell>
                        <TableCell align="center">{row.predicteScore}</TableCell>
                        <TableCell align="center">{row.probability}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
        </Grid>    
    
  );
}