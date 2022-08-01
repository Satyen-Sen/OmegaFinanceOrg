import * as React from 'react';
import Image from 'next/image';
import { Link, Button, IconButton, Dialog, Box, Typography, } from '@mui/material'; 
import CloseIcon from '@mui/icons-material/Close';
import LogoImage from '../../public/LogoHorizontal.png';


export default function LoginButton() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} sx={{textTransform:'capitalize', width:170, fontFamily:'poppins', fontSize:18, height:45, backgroundColor:'#11193F', '&:hover':{backgroundColor:'#747A99'},}}>
        Login/Register
      </Button>
      <Dialog open={open} onClose={handleClose} PaperProps={{style:{borderRadius:12}}}>
        <IconButton aria-label="close" onClick={handleClose} sx={{position: 'absolute', right:0, top:0, color:'#808080' }}>
          <CloseIcon/>
        </IconButton>
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center',}}>
          <Image src={LogoImage} width={500} height={100}/>
          <Typography variant="body" color="#11193F" sx={{fontWeight:600, fontSize:30, mb:2,}}>
            Omega Finance
          </Typography>
          <Typography variant="h5" sx={{m:2, mt:4}}>Omega Finance</Typography>  
        </Box>
      </Dialog>
    </div>
  );
};
