import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CCBE1 from '../resources/CCBE1.png'
const useStyles = makeStyles({
    table: {
        maxWidth: 400,
    },
});

function createData(name, calories) {
    return { name, calories };
}

const rows = [
    createData('Gene', 'FADS2'),
    createData('Probe type', 'RNA'),
    createData('Probe Orientation', 'Antisense'),
    createData('Plan of Section', 'Varible'),
    createData('Trearments', 'ISH'),
];

export default function MarkerTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} style={{float:'left'}}>
            <Table className={classes.table} aria-label="simple table" style={{float:'left'}}>
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <img src={CCBE1} style={{ width: '40%' ,float:'left',padding:' 0 50px'}}></img>
        </TableContainer>
    );
}
