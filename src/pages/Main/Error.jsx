import React from 'react'
import errorimg from '../../Lottie/125075-page-not-found.gif'
import { Container } from '@mui/material'



function Error() {
    return (
        <Container maxWidth='lg'> 
        <div >
            <img style={{ width: '40%', position: 'absolute',zIndex:'-100', left: '30%' }} src={errorimg} alt="" />
        </div>
        </Container>
    )
}

export default Error