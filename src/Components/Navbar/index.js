import React from 'react';
import {FaBars} from 'react-icons/fa';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItems,
    NavLinks,
} from './NavbarElements';
const Navbar = ({toggle}) => {
    return (
        <>
        {/*create with rafce command'*/}
            <Nav>
                <NavbarContainer >
                    <NavLogo to='/'>JCPosso</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItems>
                            <NavLinks to="about">Home</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to="education">Education</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to="projects">Projects</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to="contact">Contact </NavLinks>
                        </NavItems>
                    </NavMenu>

                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
