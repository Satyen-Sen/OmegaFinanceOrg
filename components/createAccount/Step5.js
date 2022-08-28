import * as React from 'react';
import Image from 'next/image';
import { Box, Typography, TextField, InputAdornment, IconButton, Grid, } from '@mui/material'; 
import BadgeIcon from '@mui/icons-material/Badge';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import DocumentImage from '../../public/CreateAccount/05_Document.png';
import CertificateImage from '../../public/CreateAccount/05_Certificate.png';

export default function Step5() {

    return (
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', mt:2,}}>

            <Box sx={{m:2, display:'flex', flexDirection:'column',}}>
                <Typography variant="body" align='center' sx={{fontSize:28, color:'#11193F',}}>Professional Details</Typography>
                <Typography variant="body" align='center'>Uploading documents is mandatory for verification.</Typography>
            </Box>

            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'left', m:2, width:350,}}>
                <Typography variant="body" sx={{fontSize:14}}>
                    Stock Registration Number
                </Typography>
                <TextField variant="outlined" size="small"
                    sx={{'& legend':{display:'none'}, '& fieldset':{top:0},}} 
                    InputProps = {{startAdornment: (<InputAdornment position="start"><BadgeIcon/></InputAdornment>)}}
                />

                <Grid container spacing={0} sx={{border:1, borderRadius:1, borderColor:'#C0C0C0', my:2,}}>
                    <Grid item xs={2.2} align="center">
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            <input hidden accept="image/*" multiple type="file"/>
                            <Image src={DocumentImage} width={47} height={52}/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={9.8}>
                        <Typography variant="h6" sx={{fontSize:13, fontFamily:'poppins', fontWeight:600, my:0.5,}}>
                            Verification Documents
                        </Typography>
                        <Typography style={{lineHeight:1, fontSize:12, fontFamily:'poppins',}}>
                            Provide a valid identity proof such as Canada citezenship, Green card, Passport, etc.
                        </Typography>
                    </Grid>
                </Grid>
                
                <Grid container spacing={0} sx={{border:1, borderRadius:1, borderColor:'#C0C0C0',}}>
                    <Grid item xs={2.2} align="center">
                        <IconButton color="primary" aria-label="upload picture">
                            <input hidden accept="image/*" multiple type="file"/>
                            <Image src={CertificateImage} width={52} height={46}/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={9.8}>
                        <Typography variant="h6" sx={{fontSize:13, fontFamily:'poppins', fontWeight:600, my:0.5,}}>
                            Additional Certificates
                        </Typography>
                        <Typography style={{lineHeight:1, fontSize:12, fontFamily:'poppins',}}>
                            Please provide certificates which we will show to the investers to boost your profile. 
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={0} sx={{border:1, borderRadius:1, borderColor:'#C0C0C0', mt:2, px:1,}}>
                    <Grid item xs={2} align="left">
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            <input hidden accept="image/*" multiple type="file"/>
                            <AddAPhotoIcon sx={{color:'#11193F'}}/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={10} align="right" sx={{display:'flex', alignItems:'center',}}>
                        <Typography variant="body" sx={{fontSize:14}}>
                            Click a Live Picture for Verification
                        </Typography>
                    </Grid>
                </Grid>

            </Box>
        </Box>
    );
};