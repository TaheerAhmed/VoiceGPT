'use client'

import React,{useEffect,useState} from 'react'
import '../styles/NavBar.css'
import '../styles/Home.module.css'
import '../styles/globals.css'
import SideBar from './SideBar';
const NavBar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleToggleSidebar = () => {
        setShowSidebar(true);
        document.body.classList.add("gray-background");
    };

    const handleCloseSidebar = () => {
        setShowSidebar(false);
        setTimeout(() => {
            setShowCloseButton(false);
        }, 300);
        document.body.classList.remove("gray-background") // Wait until sidebar is closed before hiding button
    };

    const [showCloseButton, setShowCloseButton] = useState(false);

    useEffect(() => {
        // Show close button when sidebar is open
        setShowCloseButton(showSidebar);
    }, [showSidebar]);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-left">
                    <button onClick={handleToggleSidebar}>Open Sidebar</button>
                </div>
                <div className="navbar-title">
                    <h1>My App</h1>
                </div>
                <div className="navbar-right">
                    <button>Right Button</button>
                </div>
            </nav>
            <div  className='side-wrapper'>
                
            <div
                className="sidebar"
                    style={{ left: showSidebar ? 0 : "-50%" }}
                // Toggle left property
                >
             <SideBar />
                
                    
                   
            </div>
                <button className="close-sidebar" onClick={handleCloseSidebar} style={{ opacity: showCloseButton ? 1 : 0 }}>
                    X
                </button>
                
                
            </div>
        </>
    );}
export default NavBar