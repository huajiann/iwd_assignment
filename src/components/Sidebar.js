import React, { useState } from 'react'
import styled from 'styled-components';
import * as BiIcons from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';

const Nav = styled.div`
    background: #15171c;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    `;

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    `;

const SidebarNav = styled.nav`
    background: #15171c;
    display: flex;
    width: 250px;
    height: 100vh;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 500ms;
    z-index: 10;
    `;

const SidebarWrap = styled.nav`
    width: 100%;
    `;

const Sidebar = () =>{
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <Nav>
                <NavIcon to='#'>
                    <BiIcons.BiMenu onClick={showSidebar}/>
                </NavIcon>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon to='#'>
                        <BiIcons.BiLeftArrowAlt onClick={showSidebar}/>
                    </NavIcon>
                        {SidebarData.map((item, index) =>{
                            return <SubMenu item={item} key={index} />;
                        })}
                </SidebarWrap>
            </SidebarNav>
        </>
    )
}


export default Sidebar;
