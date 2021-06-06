import React,{useState,useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll } from 'react-scroll';
import hv from '../../Documents/juancamilopossoguevara.pdf';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItems,
    NavLinks,
    NavBtnWrapper,
    Button
} from './NavbarElements';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav =()=>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    }

    useEffect( () => {
            window.addEventListener('scroll',changeNav)
    },[]);

    const toggleHome =() =>{
        scroll.scrollToTop();
    }
    return (
        <>
        <IconContext.Provider value={{color: "#fff"}}>
        {/*create with rafce command'*/}
            <Nav scrollNav={scrollNav}>
                <NavbarContainer >
                    <NavLogo to='/' onClick={toggleHome}>JCPosso</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItems>
                            <NavLinks 
                                to="about"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact ='true' 
                                offset={20}
                            >About</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks 
                                to="education"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact ='true' 
                                offset={20}
                                >Education</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks 
                                to="projects"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact ='true' 
                                offset={80}
                                >Projects</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks 
                                to="contact"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact ='true' 
                                offset={20}
                                >Contact </NavLinks>
                        </NavItems>
                        <NavBtnWrapper>
                            <Button to={hv} target="_blank" download>DownloadCV </Button>
                        </NavBtnWrapper>
                    </NavMenu>

                </NavbarContainer>
            </Nav>
            </IconContext.Provider> 
        </>
    )
}

export default Navbar
