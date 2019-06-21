import React from 'react';
import { Box, Image } from 'rebass';
import './bio.css';
import Resume from '../resume/resume';
import bioTitle from '../../static/bio.svg'
import { bioContent } from './bio.json';

import mt from '../../static/mountain.JPG'
import view from '../../static/view.JPG'
import coast from '../../static/coast.JPG'
import sunset from '../../static/sunset.JPG'

const images = [
    mt,
    view,
    // coast,
    sunset
]

const content = [
    mt,
    bioContent[0],
    bioContent[1],
    view,
    sunset,
    bioContent[2]
]

const Bio = () => (
    <div className='bio'>
        <Box width={[0.9, 0.6, 0.5, 0.37]} ml='auto' mr='auto' className='page-title'>
            <Image src={bioTitle} alt="my projects" />
        </Box>
        {/* <Box width={[0.85, 0.7, 0.6, 0.5]} className='bio-content'>
            {
                bioContent.map(({ line, key }) => (
                    <p key={key}>{line}</p>
                ))
            }
        </Box> */}
        <Box width={[0.85, 0.7, 0.6, 0.5]} className='mapping'>
            {
                content.map(element => (
                    element.line ? (
                        <Box width={[1, 0.9, 0.5, 0.7]} className='text-block'>
                            <p key={element.key}>{element.line}</p>
                        </Box>
                    ) : (
                            <div className='shell1'>
                                <div className='shell2'>
                                    <Image src={element} />
                                </div>
                            </div>
                        )
                ))
            }
        </Box>
        <Box width={240} ml='auto' mr='auto'>
            <Resume />
        </Box>
        {/* <div className='images'>
            {
                images.map(image => (
                    <div className='shell1'>
                        <div className='shell2'>
                            <Image src={image} />
                        </div>
                    </div>
                ))
            }
        </div> */}
    </div >
)

export default Bio;