import React from 'react';
import { Box } from 'rebass';
import './resume.css';
import resume from '../../static/resume.pdf';

const Resume = () => (
    <Box width={[200, 240]}>
        <a href={resume} target='_blank' rel="noopener noreferrer">
            <div className='resume-link'>
                <p className='resume-link-text'>my resume{' '}<img src={`https://icon.now.sh/arrow/87ADC6/13`} alt='' /></p>
            </div>
        </a>
    </Box>
)

export default Resume;