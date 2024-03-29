import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import {FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    transition: 0.3s  ease-in-out;
    opacity: ${({ isOpen })=> (isOpen ? '100%' : '0' )};
    top: ${({ isOpen })=> (isOpen ? '0' : '-100%' )};
    `;


export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;
export const  Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;
export const SidebarWrapper = styled.div`
    color: #fff;
`
export const SidebarMenu = styled.div`
    display: grid;
    grid-template-colums: 1fr;
    grid-template-rows: repeat(6,60px);
    text-align: center;

    @media screen and (max-width: 400px){
        grid-template-rows: repeat(6, 50px);
    }

`


export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration:  none;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: Teal;
        transition: 0.2s ease-in-out;
    }
`
export  const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none ;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 1s ease-in-out;
        background:#fff;
        color: #010606;
    }  
`;