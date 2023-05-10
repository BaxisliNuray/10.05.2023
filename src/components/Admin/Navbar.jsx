import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';


function Navbar() {
  
    return (
        <AppBar position="static" style={{backgroundColor:'#eb9079'}}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/admin"
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
                        ADMIN PAGE
                    </Typography>



                    <Typography >
                        <Link style={{ color: 'white', textDecoration: 'none',marginLeft:'50px' }} to='adminemployees'> EMPLOYEES </Link>
                    </Typography>
                    <Typography>
                    <Link style={{ color: 'white', textDecoration: 'none',marginLeft:'30px' }} to='/add'>ADD EMPLOYEES </Link>
                    </Typography>


                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar