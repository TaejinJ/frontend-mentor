import React from 'react'
import styled from 'styled-components';
import { BsMoon } from 'react-icons/bs'
export const Nav = () => {
    return (
        <NavBar>
            WHERE IS THE COUNTRIES??
            <Mode style={{ fontWeight: 'normal' }}>
                <BsMoon /> Dark Mode
            </Mode>
        </NavBar >
    )
}


const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    margin : 1rem 1rem ;
    font-size: 16px;
    font-weight: bold;
 
`;
const Mode = styled.div`
    font-size: 14px;
    `;
