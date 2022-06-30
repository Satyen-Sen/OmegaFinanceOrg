import * as React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, Button, TextField, Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)({textTransform:'capitalize', fontFamily:'poppins', width:150, fontWeight:600,});

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
    <Box sx={{ width:'85%'}}>
      <Box sx={{ borderBottom:1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label={<CustomButton variant="outlined">Email</CustomButton>} {...a11yProps(0)}/>
          <Tab label={<CustomButton variant="outlined">Phone</CustomButton>} {...a11yProps(1)}/>
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Box width={300} height={150}>
            <Grid container spacing={1} sx={{width:'110%', ml:-2, mr:-5,}}>
                <Grid item xs={4}>
                    <Typography variant="h6" sx={{fontSize:19}}>Email :</Typography>
                </Grid>
                <Grid item xs={8}>
                    <TextField id="email" variant="standard" placeholder="Enter your Email here" sx={{required: true, width:'100%'}}/>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h6" sx={{fontSize:20}}>Password :</Typography>
                </Grid> 
                <Grid item xs={8}>
                <TextField id="password" variant="standard" placeholder="Enter your password here" sx={{required: true, width:'100%'}}/>
                </Grid>
            </Grid>
            <Box sx={{display:'flex', justifyContent:'center', width:300, p:2,}}>
                <CustomButton variant="contained" sx={{m:2}}>Login</CustomButton>
            </Box>
        </Box>
      </TabPanel>

      <TabPanel value={value} index={1}>
      <Box width={300} height={150}>
            <Grid container spacing={1} sx={{width:'110%', ml:-2, mr:-5,}}>
                <Grid item xs={4}>
                    <Typography variant="h6" sx={{fontSize:19}}>Phone :</Typography>
                </Grid>
                <Grid item xs={8}>
                    <TextField id="phone" variant="standard" placeholder="Enter your Phone number" sx={{required: true, width:'100%'}}/>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h6" sx={{fontSize:20}}>Password :</Typography>
                </Grid> 
                <Grid item xs={8}>
                <TextField id="password" variant="standard" placeholder="Enter your password here" sx={{required: true, width:'100%'}}/>
                </Grid>
            </Grid>
            <Box sx={{display:'flex', justifyContent:'center', width:300, p:2,}}>
                <CustomButton variant="contained" sx={{m:2}}>Login</CustomButton>
            </Box>
        </Box>
      </TabPanel>
    </Box>
  );
}
