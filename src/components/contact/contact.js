import React from 'react';
import { Box, Image } from 'rebass';
import './contact.css';
import contactTitle from '../../static/contact.svg';

export const contact_links = [
    {
        icon: "https://icon.now.sh/email",
        label: "email me ",
        link: "mailto:Nicholas.C.Meisburger@rice.edu",
    },
    {
        icon: "https://icon.now.sh/linkedin",
        label: "find me on LinkedIn ",
        link: "https://www.linkedin.com/in/nicholas-meisburger-65140b186/",
    },
    {
        icon: "https://icon.now.sh/github",
        label: "checkout my GitHub ",
        link: "https://github.com/nmeisburger0",
    }
]

const Contact = () => (
    <div className='contact'>
        <Box width={[0.9, 0.6, 0.5, 0.4]} ml='auto' mr='auto' className='page-title'>
            <Image src={contactTitle} alt="my projects" />
        </Box>
        <div className='contact-links'>
            {
                contact_links.map(({ icon, label, link }) => (
                    <a href={link} rel="noopener noreferrer" key={label}>
                        <div className='contact-link'>
                            <img src={`${icon}/87ADC6/60`} alt='' />
                            <p className='contact-link-text'>{label} <img src="https://icon.now.sh/arrow/87ADC6/12" alt=''/></p>
                        </div>
                    </a>
                ))
            }
        </div>
    </div>
)

export default Contact;