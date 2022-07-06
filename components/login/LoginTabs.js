import * as React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, Button, TextField, Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function LoginTabs() {
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box>
      <Box>    
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Email"
           {...a11yProps(0)}/>
          <Tab label="Phone" {...a11yProps(1)}/>
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Box width={300} height={130}>
          <TextField id="email" variant="filled" placeholder="Enter your Email here" InputProps={{ disableUnderline: true }} sx={{m:2,}} fullWidth/>
          <TextField id="email" variant="filled" placeholder="Enter your Email here" InputProps={{ disableUnderline: true }}  size="small" fullWidth/>
              <Button variant="contained" href="https://omegafinancegroup.com/about-us/" sx={{textTransform:'capitalize', fontFamily:'poppins', fontSize:14, height:36, width:150, backgroundColor:'#11193F', '&:hover':{backgroundColor:'#747A99', color:'#FFFFFF'},}}>
                Login
              </Button>
        </Box>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Box width={300} height={130}>
          <Grid container spacing={1} sx={{width:'110%', ml:-2, mr:-5,}}>
            <Grid item xs={4}>
              <Typography variant="h6" sx={{fontSize:19}}>Phone :</Typography>
            </Grid>
              <Grid item xs={8}>
                <TextField id="phone" variant="standard" placeholder="Enter your Phone number" sx={{required: true, width:'100%'}}/>
              </Grid>
          </Grid>
            <Box sx={{display:'flex', justifyContent:'center', p:2,}}>
              <Button variant="contained" href="https://omegafinancegroup.com/about-us/" sx={{textTransform:'capitalize', fontFamily:'poppins', fontSize:14, height:36, width:150, backgroundColor:'#11193F', '&:hover':{backgroundColor:'#747A99', color:'#FFFFFF'},}}>
                Send OTP
              </Button>
            </Box>
        </Box>
      </TabPanel>
    </Box>
  );
}
