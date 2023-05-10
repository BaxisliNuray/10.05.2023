import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PersonPinCircleOutlinedIcon from '@mui/icons-material/PersonPinCircleOutlined';
import { Link } from 'react-router-dom';


function Navbar() {
  
    return (
        <AppBar position="static" style={{backgroundColor:'#aa5713'}}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <PersonPinCircleOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        
                        }}
                    >
                        COMPANY
                    </Typography>



                    <Typography >
                        <Link style={{ color: 'white', textDecoration: 'none',marginRight:'30px' }} to='/home'> HOME </Link>
                    </Typography>
                    <Typography>
                    <Link style={{ color: 'white', textDecoration: 'none',marginRight:'30px' }} to='/employees'> EMPLOYEES </Link>
                    </Typography>


                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar