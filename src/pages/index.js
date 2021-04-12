import React,{useState} from 'react'
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';

const Home = () => {
    const [isOpen,setOpen] = useState(false);
    const toggle =()=>{
        setOpen(!isOpen);
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        </>
    )
}

export default Home
