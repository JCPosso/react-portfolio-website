import React,{useState} from 'react'
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import {homeS1} from '../Components/InfoSection/Data';
import HeroSection from '../Components/HeroSection';
import InfoSection from '../Components/InfoSection';

const Home = () => {
    const [isOpen,setOpen] = useState(false);
    const toggle =()=>{
        setOpen(!isOpen);
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection/>
        <InfoSection {...homeS1} />
        </>
    )
}

export default Home
