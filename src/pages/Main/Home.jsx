import React from 'react'
import employee from '../../Lottie/103648-office-worker-team-work-hello-office-waves.gif'
function Home() {
    return (
        <div >
            <img style={ {position: 'absolute', top: '6%',right:'1%', zIndex: '-100'} } src={employee} />

            <h1 style={{   marginTop: '20%', fontFamily: 'Garamond', fontSize: '70px' }}>
                <span style={{ color: '#ffb75b' }}>This </span>
                <span style={{ color: '#0d2142' }}>is </span>
                <span style={{ color: '#723f31' }}>HOME </span>
                <span style={{ color: '#873c50' }}>Page</span>
            </h1>
        </div>
    )
}

export default Home