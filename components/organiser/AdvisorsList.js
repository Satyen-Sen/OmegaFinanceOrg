import * as React from 'react';
import { Box, Typography, Table, TableBody, TableRow, TableCell, Checkbox, Avatar, Button, } from '@mui/material'; 
import TableToolbar from './TableToolbar';
import TableHeader from './TableHeader';
import stockAdvisors from '../../data/stockAdvisors.json';


export default function AdvisorsList() {

    const [selected, setSelected] = React.useState([]);

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
          const newSelected = stockAdvisors.map((n) => n.title);
          setSelected(newSelected);
          return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {newSelected = newSelected.concat(selected, name)} 
        else if (selectedIndex === 0) {newSelected = newSelected.concat(selected.slice(1))} 
        else if (selectedIndex === selected.length - 1) {newSelected = newSelected.concat(selected.slice(0, -1))} 
        else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1),);
        }
        setSelected(newSelected);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;
    
    return (
        <Box sx={{mb:2, borderRadius:2, boxShadow:5, backgroundColor:'#FFFFFF',}}>

            <TableToolbar numSelected={selected.length}/>
            
            <Table>
                <TableHeader numSelected={selected.length} onSelectAllClick={handleSelectAllClick} rowCount={stockAdvisors.length}/>

                <TableBody>
                    {stockAdvisors.map((item) => {

                        const isItemSelected = isSelected(item.title);

                        return (
                            <TableRow key={item.id} onClick={(event)=>handleClick(event,item.title)} selected={isItemSelected} role="checkbox" hover>
                                <TableCell padding="checkbox">
                                    <Checkbox color="primary" checked={isItemSelected}/>
                                </TableCell>

                                <TableCell>
                                    <Avatar alt={item.title} src={item.avatar} sx={{mt:-2, mb:-2, width:45, height:45,}}/>
                                </TableCell>

                                <TableCell>
                                    <Typography variant="h7">{item.title}</Typography>
                                </TableCell>

                                <TableCell>
                                    <Typography variant="h7" sx={{textTransform:'capitalize'}}>{item.category}</Typography>
                                </TableCell>

                                <TableCell sx={{pl:'6%'}}>
                                    <Typography variant="h7">NA</Typography>
                                </TableCell>

                                <TableCell sx={{pl:'6%'}}>
                                    <Typography variant="h7">Rs 70000</Typography>
                                </TableCell>

                                <TableCell sx={{p:0, pl:'7%',}}>
                                    <Button variant="contained" sx={{textTransform:'capitalize', width:90, backgroundColor:'#11193F', '&:hover':{backgroundColor:'#747A99', color:'#FFFFFF'},}}>
                                        Send
                                    </Button>
                                </TableCell>

                            </TableRow>
                        );
                    })}
                </TableBody>

            </Table>
          
        </Box>
    );
}

