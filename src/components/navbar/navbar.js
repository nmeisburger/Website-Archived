import React from 'react';
import * as Scroll from 'react-scroll';
import './navbar.css';

const links = [
    {
        name: "home",
        to: "home"
    },
    {
        name: "bio",
        to: "bio"
    },
    {
        name: "projects",
        to: "projects"
    },
    {
        name: "contact",
        to: "contact"
    }
]

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIdx: 0,
            expanded: false,

            homeHeight: undefined,
            bioHeight: undefined,
            projectsHeight: undefined,
            contactHeight: undefined
        }
        this.updateIdx = this.updateIdx.bind(this)
        this.expand = this.expand.bind(this)
        this.scrollHandler = this.scrollHandler.bind(this)
    }

    updateIdx(idx) {
        this.setState({ currentIdx: idx })
    }

    expand() {
        this.setState({ expanded: !this.state.expanded })
    }

    scrollHandler() {
        // const homeHeight = document.getElementById('home').clientHeight;
        // const bioHeight = document.getElementById('bio').clientHeight;
        // const projectsHeight = document.getElementById('projects').clientHeight;
        // const contactHeight = document.getElementById('contact').clientHeight;
        const scrollOffset = window.scrollY;
        if (0 < scrollOffset && scrollOffset < this.state.homeHeight) {
            this.setState({ currentIdx: 0 })
        }
        if (this.state.homeHeight < scrollOffset && scrollOffset < this.state.bioHeight) {
            this.setState({ currentIdx: 1 })
        }
        if (this.state.bioHeight < scrollOffset && scrollOffset < this.state.projectsHeight) {
            this.setState({ currentIdx: 2 })
        }
        if (this.state.projectsHeight < scrollOffset && scrollOffset < this.state.contactHeight) {
            this.setState({ currentIdx: 3 })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler)
        this.setState({
            homeHeight: document.getElementById('home').clientHeight,
            bioHeight: document.getElementById('home').clientHeight + document.getElementById('bio').clientHeight,
            projectsHeight: document.getElementById('home').clientHeight + document.getElementById('bio').clientHeight + document.getElementById('projects').clientHeight,
            contactHeight: document.getElementById('home').clientHeight + document.getElementById('bio').clientHeight + document.getElementById('projects').clientHeight + document.getElementById('contact').clientHeight
        })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler)
    }

    render() {
        let barOffsetX = -240 + 160 * this.state.currentIdx;
        let barOffsetY = -200 + 50 * this.state.currentIdx;
        let h = this.state.expanded ? (200) : (0)

        let toggleSyle = {}
        if (this.state.expanded) {
            toggleSyle.transform = 'rotate(90deg)'
        }
        return (
            <div className='navbar'>
                <div className='navbar-wide'>
                    <div className='navbar-links-container'>
                        {
                            links.map(link => (
                                <Scroll.Link to={link.to} smooth={true} duration={400} key={`${link.name}`}>
                                    <div className={links.indexOf(link) === this.state.currentIdx ? ('navbar-active') : ('navbar-inactive')}>
                                        {link.name}
                                    </div>
                                </Scroll.Link>
                            ))
                        }
                    </div>
                    <div className='bar' style={{ transform: `translateX(${barOffsetX}px)` }}></div>
                </div>
                <div className='navbar-narrow'>
                    <img src='https://icon.now.sh/burger/011638/40' alt="" className='navbar-toggle' onClick={this.expand} style={toggleSyle} />
                    <div className='navbar-dropdown' style={{ maxHeight: `${h}px` }}>
                        <div>
                            {
                                links.map(link => (
                                    <Scroll.Link to={link.to} smooth={true} duration={400} key={`${link.name}`}>
                                        <div onClick={() => this.updateIdx(links.indexOf(link))} onMouseEnter={() => this.updateIdx(links.indexOf(link))}
                                            className={links.indexOf(link) === this.state.currentIdx ? ('navbar-active-narrow') : ('navbar-inactive-narrow')}>
                                            {link.name}
                                        </div>
                                    </Scroll.Link>
                                ))
                            }
                        </div>
                        <div className='bar-narrow' style={{ transform: `translateY(${barOffsetY}px)` }}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;