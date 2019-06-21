import React from 'react';
import { Box, Image } from 'rebass';
// import Logo from '../logo/logo';
import './homepage.css';
import Resume from '../resume/resume';
import nameLogo from '../../static/nameLogo.svg';

const Homepage = () => (
    <div className='homepage'>
        <Box width={[0.9, 0.7, 0.7, 0.6]} className="name_title">
            <Image src={nameLogo} alt="Nicholas Meisburger" />
        </Box>
        {/* <div className='fade-logo'> 
            <Logo />
        </div> */}
        <div className='resume-btn'>
            <Resume />
        </div>
    </div>
)

export default Homepage;