import * as React from 'react';
import PropTypes from 'prop-types';
import { Typography, Box, Tab, Tabs, Button, } from '@mui/material';
import { withStyles } from '@mui/styles';
// import EnterOTP from '../login/EnterOTP';
import EmailLoginTab from './EmailLoginTab';
import MuiPhoneNumber from "material-ui-phone-number";

const CustomTab = withStyles({root:{fontWeight:600}})(Tab);

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} {...other}>
            {value === index && (
                <Box sx={{p:3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {id: `simple-tab-${index}`, 'aria-controls': `simple-tabpanel-${index}`,};
}

export default function LoginTabs() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Tabs value={value} onChange={handleChange} tabItemContainerStyle={{height:10}}> 
                <CustomTab label="Email" {...a11yProps(0)} sx={{borderRadius:2, borderColor:'inherit', border:1, m:1, mr:2, width:150,}}/>
                <CustomTab label="Phone" {...a11yProps(1)} sx={{borderRadius:2, borderColor:'inherit', border:1, m:1, ml:2, width:150,}}/>
            </Tabs>

            <TabPanel value={value} index={0}>
                <Box width={300} height={134} sx={{mt:-2}}>
                    <EmailLoginTab/>
                    <Box sx={{display:'flex', justifyContent:'center', p:2, pt:0,}}>
                        <Button variant="contained" sx={{textTransform:'none', fontFamily:'poppins', fontSize:14, height:36, width:150, backgroundColor:'#11193F', '&:hover':{backgroundColor:'#747A99', color:'#FFFFFF'},}}>
                            Login
                        </Button>
                    </Box>
                </Box>
            </TabPanel>

            <TabPanel value={value} index={1}>
                <Box width={300} height={110} sx={{mt:-2}}>
                    <Box sx={{display:'flex', justifyContent:'center', mt:4,}}>
                        <MuiPhoneNumber defaultCountry={"ca"} onChange={console.log}/>
                    </Box>
                    <Box sx={{display:'flex', justifyContent:'center', mt:4, p:2, pt:0,}}>
                        <Button variant="contained" sx={{textTransform:'none', fontFamily:'poppins', fontSize:14, height:36, width:150, backgroundColor:'#11193F', '&:hover':{backgroundColor:'#747A99', color:'#FFFFFF'},}}>
                            Send OTP 
                        </Button>
                    </Box>
                </Box> 
            </TabPanel>
        </Box>
    );
};