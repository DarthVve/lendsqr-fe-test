import './dashboard.scss';
import { useState, useRef, useEffect } from 'react';
import { Navbar } from '../../components';
import { Sidebar, Users, UserDetails } from '../../containers';
// import { BsWindow, BsWindowSidebar } from 'react-icons/Bs';
import { getUsersData } from '../../components/user-info/userDataFetch';

const Dashboard = () => {
    const [showUserDetails, setShowUserDetails] = useState(false);
    const sidebarRef = useRef<HTMLElement | null>(null);
    const openSidebarEl = document.getElementsByClassName('open-sidebar')[0] as HTMLElement;
    const closeSidebarEl = document.getElementsByClassName('close-sidebar')[0] as HTMLElement;
    const [id, setId] = useState<string>('');

    const handleShowUserDetails = () => {
        setShowUserDetails(true);
    };

    const handleShowUsers = () => {
        setShowUserDetails(false);
    };

    
    const handleOpenSidebar = () => {
        sidebarRef.current!.style.display = 'block';
        openSidebarEl.style.display = 'none';
        closeSidebarEl.style.display = 'block';
    };

    const handleCloseSidebar = () => {
        sidebarRef.current!.style.display = 'none';
        openSidebarEl.style.display = 'block';
        closeSidebarEl.style.display = 'none';
    };

    useEffect(() => {
        getUsersData()
    }, []);

    return (
        <div className='dashboard'>
            <Navbar />
            <div className='dashboard-content'>
                {/* <div className='open-sidebar' onClick={handleOpenSidebar}>
                    <BsWindowSidebar size={25}/>
                </div> */}
                <Sidebar onClick={handleShowUsers} ref={sidebarRef}/>
                {/* <div className='close-sidebar' onClick={handleCloseSidebar}>
                    <BsWindow size={25}/>
                </div> */}
                {showUserDetails ? (
                    <UserDetails id={id} onClick={handleShowUsers} />
                ) : (
                        <Users onClick={handleShowUserDetails} />
                )}
            </div>
        </div>
    )
};

export default Dashboard;