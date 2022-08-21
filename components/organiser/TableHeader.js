import * as React from 'react';
import { Typography, TableCell, TableRow, Checkbox, } from '@mui/material'; 


export default function TableHeader(props) {

    return (
        <TableRow>
            <TableCell padding="checkbox">
                <Checkbox
                    color="primary"
                    indeterminate={props.numSelected > 0 && props.numSelected < props.rowCount}
                    checked={props.rowCount > 0 && props.numSelected === props.rowCount}
                    onChange={props.onSelectAllClick}
                />
            </TableCell>

            <TableCell align='left' padding='normal'>
                <Typography variant="h6">Profile</Typography>
            </TableCell>

            <TableCell align='left' padding='normal'>
                <Typography variant="h6">Name</Typography>
            </TableCell>

            <TableCell align='left' padding='normal'>
                <Typography variant="h6">Category</Typography>
            </TableCell>

            <TableCell align='left' padding='normal'>
                <Typography variant="h6">Transaction Details</Typography>
            </TableCell>

            <TableCell align='left' padding='normal'>
                <Typography variant="h6">Pending Payment</Typography>
            </TableCell>

            <TableCell align='left' padding='normal'>
                <Typography variant="h6">Release Payment</Typography>
            </TableCell>
        </TableRow>  
    );
};