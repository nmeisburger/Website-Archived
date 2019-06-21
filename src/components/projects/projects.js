import React from 'react';
import { Box, Image } from 'rebass';
import './projects.css';
import { projects } from './projects.json';
import projectsTitle from '../../static/projects.svg'

class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = { currentSlide: 0 }
        this.changeIdx = this.changeIdx.bind(this)
    }

    changeIdx(idx) {
        this.setState({ currentSlide: idx })
    }

    render() {
        return (
            <div className='projects'>
                <Box width={[0.9, 0.6, 0.5, 0.4]} ml='auto' mr='auto' className='page-title'>
                    <Image src={projectsTitle} alt="my projects" />
                </Box>
                <div className='dots'>
                    {
                        projects.map(project => (
                            <div className={projects.indexOf(project) === this.state.currentSlide ? ('project-dot-active') : ('project-dot-inactive')}
                                onClick={() => this.changeIdx(projects.indexOf(project))} key={`dot${projects.indexOf(project)}`}>
                                {projects.indexOf(project) + 1}
                            </div>
                        ))
                    }
                </div>
                <Box className='project-content' width={[0.85, 0.8, 0.7, 0.5]}>
                    <h1 className='project-title'>{projects[this.state.currentSlide].name}</h1>
                    {
                        projects[this.state.currentSlide].bullets.map(bullet => (
                            <p className='project-description' key={`${projects[this.state.currentSlide].name}+${projects[this.state.currentSlide].bullets.indexOf(bullet)}`}>
                                <img src="https://icon.now.sh/arrow/87ADC6/12" alt="" /> {' '} {bullet}
                            </p>
                        ))
                    }
                </Box>
            </div>
        )
    }
}

export default Projects;