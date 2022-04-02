import React from 'react'
import styled from "styled-components"
import {Link, NavLink} from 'react-router-dom';

import {FaSwimmingPool} from "react-icons/fa"

const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
    width: 100%;
    padding: 1em;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    background: rgba( 88, 89, 87, 1);
    
`
const BrandContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
    width: auto;
    align-self: flex-start;
    margin-left: 2.8em;
    border-radius: 20px;
    border: 2px solid rgba(242, 242, 243, 1);
    padding: .42em;
    padding-left: 0.72em;
    padding-right: 0.72em;
`
const Brand = styled.h2`
    font-size: 1.4em;
    font-weight: 600;
    font-style: italicize !important;
    color: rgba(242, 121, 53, 1);
    margin-top: 0px;
    margin-bottom: 0px;
`
const BrandIcon = styled(FaSwimmingPool)`
    font-size: 1.7em;
    font-weight: 600;
    font-style: italicize !important;
    color: rgba(242, 121, 53, 1);
    margin-top: 0px;
    margin-bottom: 0px;
    margin-right: 0.3em;
`
const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 80%;
    width: auto;
    align-items: center;
    align-self: center;
    margin-right: 3em;
`

const NavbarLink = styled.a`
    height: auto;
    margin-left: 5px;
    margin-right: 5px;
    font-weight: 400;
    font-size: 1.3em;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
    color: white;
    border-radius: 40px;
    text-decoration: none;

    @media (max-width: 1080px) {
        font-size: 0.9em;
        margin-left: 3px;
        margin-right: 3px;
      }

    @media (max-width: 768px) {
        font-size: 0.9em;
        margin-left: 3px;
        margin-right: 3px;
      }
    @media (max-width: 380px) {
        font-size: 0.6em;
        font-weight: 800;
        margin-left: 3px;
        margin-right: 3px;
      }

    &:hover {

        background: #393C3F;
        border-radius: 13px;
        color: white;
        backdrop-filter: blur(12px) saturate(189%);
        -webkit-backdrop-filter: blur(0px) saturate(189%);
        background-color: rgba(255, 255, 255, 0.18);
    }

    &:active {
        padding-left: 8px;
        padding-right: 8px;
        padding-top: 4px;
        padding-bottom: 4px;
        background: #393C3F;
        border-radius: 20px;
        color: white;
        backdrop-filter: blur(12px) saturate(149%);
        -webkit-backdrop-filter: blur(0px) saturate(149%);
        background-color: rgba(0, 0, 0, 0.3);
    }

`

const CleanLink = styled(Link)`
    text-decoration: none;
    align-self: center;
    
`

const NavigationBar = () => {
    return (
        <>
        <NavContainer>
            <BrandContainer>
                <BrandIcon />
                <Brand>laury.</Brand>
            </BrandContainer>
            <LinkContainer>
                <CleanLink to="/">
                    <NavbarLink href="#">Home</NavbarLink>
                </CleanLink>
                <CleanLink to="/docs">
                    <NavbarLink href="#">Docs</NavbarLink>
                </CleanLink>
                <CleanLink to="/authentication">
                    <NavbarLink href="#">Authenticate</NavbarLink>
                </CleanLink>
            </LinkContainer>
        </NavContainer>
            
        </>
    )
}

export default NavigationBar
