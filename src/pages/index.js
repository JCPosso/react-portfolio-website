import React,{useState} from 'react'
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import {homeS1,homeS2,homeS3} from '../Components/InfoSection/Data';
import HeroSection from '../Components/HeroSection';
import InfoSection from '../Components/InfoSection';
import Projects from '../Components/Projects';

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
        <InfoSection {...homeS2} />
        <Projects/>
        </>
    )
}

export default Home
