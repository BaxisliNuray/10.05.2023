import * as React from 'react';
import { Container, Grid } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

export default function Footer() {

  return (

      <Container maxWidth="lg" style={{ position: 'absolute', marginTop: '35%' }} >
        <Grid container>
          <Grid item xs={4}>
            <ul style={{ listStyle: 'none', padding: '10px', marginTop: '10px' }} >
              <li style={{ fontSize: '30px', marginBottom: '10px', fontFamily: 'Garamond', color: '#ffb75b' }} >
                <h6> COMPANY</h6></li>
              <li >Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>

            </ul>
          </Grid>
          <Grid item xs={2}>
            <ul style={{ listStyle: 'none', padding: '10px', marginTop: '10px' }}>
              <li style={{ fontSize: '30px', marginBottom: '10px', fontFamily: 'Garamond', color: '#723f31' }}><h6>PRODUCTS</h6></li>
              <li style={{ marginBottom: '10px' }}>MDWordPress</li>
              <li style={{ marginBottom: '10px' }}>BrandFlow</li>
              <li style={{ marginBottom: '10px' }}>Bootstrap</li>
              <li style={{ marginBottom: '10px' }}>Angular</li>
            </ul>
          </Grid>
          <Grid item xs={2}>
            <ul style={{ listStyle: 'none', padding: '10px', marginTop: '10px' }}>
              <li style={{ fontSize: '30px', marginBottom: '10px', fontFamily: 'Garamond', color: '#873c50' }}><h6>USEFUL LINKS</h6></li>
              <li style={{ marginBottom: '10px' }}>MDWordPress</li>
              <li style={{ marginBottom: '10px' }}>BrandFlow</li>
              <li style={{ marginBottom: '10px' }}>Bootstrap</li>
              <li style={{ marginBottom: '10px' }}>Angular</li>
            </ul>

          </Grid>
          <Grid item xs={4}>
            <ul style={{ listStyle: 'none', padding: '10px', marginTop: '10px' }}>
              <li style={{ fontSize: '30px', marginBottom: '10px', fontFamily: 'Garamond', color: '#eb785a' }}>
                <h6 >CONTACT</h6></li>
              <li style={{ display: 'flex', marginBottom: '10px' }}>
                <LocalPhoneIcon style={{ color: 'white', fontSize: '30px', backgroundColor: '#274775', border: '1px solid  #0d2142', borderRadius: '50%', padding: '5px' }} />
                <span style={{ fontSize: '20px' }}> + 01 234 567 88</span>
              </li>
              <li style={{ display: 'flex', marginBottom: '10px' }}>
                <EmailIcon style={{ color: 'white', fontSize: '30px', backgroundColor: '#274775', border: '1px solid  #0d2142', borderRadius: '50%', padding: '5px' }} />
                <span style={{ fontSize: '20px' }}>  info@example.com</span>
              </li>
              <li style={{ display: 'flex', marginBottom: '10px' }}>
                <HomeIcon style={{ color: 'white', fontSize: '30px', backgroundColor: '#274775', border: '1px solid  #0d2142', borderRadius: '50%', padding: '5px' }} />
                <span style={{ fontSize: '20px' }}>New York, NY 10012, US</span>
              </li>
              <li style={{ display: 'flex', marginBottom: '10px' }}>
                <PhoneAndroidIcon style={{ color: 'white', fontSize: '30px', backgroundColor: '#274775', border: '1px solid  #0d2142', borderRadius: '50%', padding: '5px' }} />
                <span style={{ fontSize: '20px' }}> + 01 234 567 89</span>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>

  );
}