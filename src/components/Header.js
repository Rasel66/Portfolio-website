import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import { NavLink } from 'react-router-dom';

const Header = () => {
    const common = {
        marginRight: 15,
        textDecoration: 'none',
        fontSize: 18,
        letterSpacing: '.5px',
        color: 'black',
        fontWeight: 500
    }
    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <div>
                        <h2 className='mt-2'>
                            <Nav.Link href ="#home">Protfolio</Nav.Link>
                        </h2>
                    </div>
                    <Nav className="mt-2">
                        <div className='mt-1'>
                            <NavLink to ="/" style={common}>Home</NavLink>
                            <NavLink to ="/about" style={common}>About</NavLink>
                            <NavLink to ="/playlist" style={common}>Project</NavLink>
                            <NavLink to ="/contact" style={common}>Contact</NavLink>
                        </div>
                        <div>
                        <Button variant="primary" href='https://github.com/Rasel66'>GitHub</Button>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
