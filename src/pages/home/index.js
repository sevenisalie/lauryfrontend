import React from 'react'
import styled from "styled-components"
import {FaSwimmingPool} from "react-icons/fa"
import { Link } from 'react-router-dom'

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
    width: 100vw;
    background: url('assets/images/headerbg.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    @media (max-width: 712px) {
        flex-direction: column;
        width: 100vw;
        height: auto;
        
    }
`
const HeaderRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: auto;
    align-items: center;
    align-content: center;
    justify-content: center;

    @media (max-width: 712px) {
        flex-direction: column;
        padding: 0.2em;
        width: 100vw;
        height: auto;
    }
`
const HeaderColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100vw;
    height: auto;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 1.6em;
    
`
const HeaderTitle = styled.h2`
    font-size: 5em;
    color: rgba(242, 121, 53, 1);
    @media (max-width: 512px) {
        font-size: 3.2em;
        
    }
`
const HeaderBrandIcon = styled(FaSwimmingPool)`
    font-size: 8em;
    color: rgba(242, 121, 53, 1);
    margin-right: 0.3em;
    @media (max-width: 712px) {
        font-size: 3.2em;
    }
`
const HeaderDescription = styled.p`
    font-size: 1.3em;
    font-weight: 600;
    @media (max-width: 712px) {
        font-size: 0.8em;
        text-align: center;
    }
`
const HeaderImage = styled.img`
    height: auto;
    width: 100%;
    padding: 1.3em;
`
const HeaderButton = styled.button`
    height: auto;
    width: auto;
    border: 2px solid rgba(242, 121, 53, 1);
    padding: 0.3em;
    background: transparent;
    margin: 0.7em;
    font-size: 1.3em;
    font-weight: 400;
    cursor: pointer;

    &:hover {
        background: rgba(0, 0, 0, 0.2);
    }
    
`
const ButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;
`
const CleanLink = styled(Link)`
    text-decoration: none;
    align-self: center;
    
`
export const Home = () => {
    return (
        <>
            <HeaderContainer>
                <HeaderRow>
                    <HeaderColumn >
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", height: "auto"}}>
                            <HeaderBrandIcon />
                            <HeaderTitle >laury.</HeaderTitle>
                        </div>

                        <HeaderDescription>an API for fetching ERC20 token prices on Polygon and Quickswap</HeaderDescription>
                        <HeaderDescription>integrate ERC20 quotes into your app without getting out your calculus textbook.</HeaderDescription>
                        <ButtonRow>
                            <CleanLink to="/authentication">
                                <HeaderButton>Get a Key</HeaderButton>
                            </CleanLink>
                            <CleanLink to="/docs">
                                <HeaderButton>Read the Docs</HeaderButton>
                            </CleanLink>
                        </ButtonRow>
                    </HeaderColumn>
                    <HeaderColumn>
                        <HeaderImage src="/assets/images/stockguy.png" />
                    </HeaderColumn>
                </HeaderRow>
            </HeaderContainer>
        </>
    )
}

export default Home
