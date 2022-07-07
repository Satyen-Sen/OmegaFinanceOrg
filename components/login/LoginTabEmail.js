import * as React from 'react';
import { Box, IconButton, TextField, Input, InputLabel, InputAdornment, FormControl, } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MailIcon from '@mui/icons-material/Mail';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';

export default function EmailLoginTab() {
  const [values, setValues] = React.useState({
    amount: '',
    password: '', 
    weight: '',
    weightRange: '',
    showPassword: false,
  });

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
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', m: 1,}}>
        <MailIcon sx={{color:'action.active', mr:1, my: 0.5}} />
        <TextField label="Email" variant="standard" sx={{width:215}} size="small"/>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', mt:-2,}}>
        <KeyRoundedIcon sx={{color:'action.active', ml:1, my:3.5,}}/>
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
    </Box>
  );
}