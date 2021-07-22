import React, {useState} from 'react'
import HeroSection from '../components/hero section';
import InfoSection from '../components/info section';
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'

const Home = () => {
    const [isOpen,setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection/>
        </>
    );
}

export default Home;
