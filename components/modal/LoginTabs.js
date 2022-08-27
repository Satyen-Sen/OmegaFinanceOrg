import * as React from 'react';
import Link from 'next/link'; 
import {Col, Nav, Row, Tab} from 'react-bootstrap';
import MuiPhoneNumber from "material-ui-phone-number";
import { Box, Button, IconButton, TextField, Input, InputLabel, InputAdornment, FormControl, } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import EnterOTP from './EnterOTP'; 


function EmailTab(props){
    const [values, setValues] = React.useState({showPassword:false});
    const handlePassword = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    return (
        <Box width={300} height={160}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', m: 1,}}>
                <EmailIcon sx={{color:'#11193F', mr:1, my: 0.5}}/>
                <TextField label="Email" variant="standard" sx={{width:215}} size="small"/>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', mt:-2,}}>
                <KeyRoundedIcon sx={{color:'#11193F', ml:1, my:3.5,}}/>
                <FormControl sx={{ m: 1, width:215,}} variant="standard">
                    <InputLabel>Password</InputLabel>
                    <Input type={values.showPassword ? 'text' : 'password'} value={values.password} onChange={handlePassword('password')} size="small"
                    endAdornment={ 
                        <InputAdornment position="end">
                            <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }/>
                </FormControl>
            </Box> 
            <Box sx={{display:'flex', justifyContent:'center', p:2, pt:0,}}>
                <Link href={props.link}>
                    <Button variant="contained" sx={{textTransform:'none', fontFamily:'poppins', fontSize:14, height:36, width:150, backgroundColor:'#11193F', '&:hover':{backgroundColor:'#747A99', color:'#FFFFFF'},}}>
                        Login
                    </Button>
                </Link>
            </Box>
        </Box>
    );
};

function PhoneTab(props){
    return(
        <Box width={300} height={136}>
            <Box sx={{display:'flex', justifyContent:'center', mt:4,}}>
                <MuiPhoneNumber defaultCountry={"ca"}/>
            </Box>
            <Box sx={{display:'flex', justifyContent:'center', mt:4, p:2, pt:0,}}>  
                <EnterOTP targetlink={props.link}/>
            </Box>
        </Box> 
    );
};

export default function LoginTabs(props) {
    return (
        <Box>
            <Tab.Container defaultActiveKey="first">
                <Col>
                    <Row>
                        <Nav variant="pills" justify>
                            <Nav.Item><Nav.Link eventKey="first">Email</Nav.Link></Nav.Item>&emsp;
                            <Nav.Item><Nav.Link eventKey="second">Phone</Nav.Link></Nav.Item>
                        </Nav>
                    </Row>
                    <Row>
                        <Tab.Content>
                            <Tab.Pane eventKey="first"><EmailTab link={props.target}/></Tab.Pane>
                            <Tab.Pane eventKey="second"><PhoneTab link={props.target}/></Tab.Pane>
                        </Tab.Content>
                    </Row>
                </Col>
            </Tab.Container>
        </Box>
    );
};