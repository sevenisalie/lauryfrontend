import React, {useState, useEffect, useReducer} from 'react'
import styled from "styled-components"
import {FaKey, FaEthereum, FaRegCopy} from "react-icons/fa"
import {MdMarkEmailRead} from "react-icons/md"

import axios from 'axios'
const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;


    @media (max-width: 712px) {
        flex-direction: column;
        width: 100vw;
        height: 100%;
        
    }
`
const AuthenticationRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
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
const AuthenticationColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100vw;
    height: 100%;
    align-items: center;
    align-content: center;
    justify-content: center;

    @media (max-width: 712px) {
        margin-bottom: 4em;
    }
    
`

const AuthenticationCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 88%;
    height: auto;
    box-shadow:
    4.3px 3.3px 8px rgba(0, 0, 0, 0.07),
    14.5px 11.2px 26.8px rgba(0, 0, 0, 0.042),
    65px 50px 120px rgba(0, 0, 0, 0.028);
`
const LoginLogo = styled(FaKey)`
    color: rgba(242, 121, 53, 0.88);
    font-size: 1.9em;
    align-self: center;
    margin-bottom: 0.7em;
    margin-top: 0.7em;
    height: auto;
`
const EmailInput = styled.input`

    height: 100%;
    align-self: center;
    margin-bottom: 0.3em;
    margin-top: 0.3em;
    margin-right: 0.5em;
    color: rgb(0, 0, 0);
    width: 0px;
    position: relative;

    font-weight: 500;
    outline: none;
    border: none;
    -webkit-writing-mode: horizontal-tb !important;
    flex: 1 1 auto;
    background-color: transparent;
    font-size: 24px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0px;
    appearance: textfield;
    text-align: right;
    text-rendering: auto;
    -webkit-rtl-ordering: logical;
    cursor: text;

    &:select {
        border: 3px solid rgba(242, 121, 53, 0.88);
    }
`
const EmailInputContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
    width: 90%;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    margin-top: 0.6em;
    border: 3px solid rgba(242, 121, 53, 0.88);
    border-radius: 0.5em;
    align-self: center;
    

`
const EmailLogo = styled(MdMarkEmailRead)`
    color: rgba(242, 121, 53, 1);
    height: 100%;
    width: auto;
`
const EthLogo = styled(FaEthereum)`
    color: rgba(242, 121, 53, 1);
    height: 100%;
    width: auto;
`
const EmailLogoContainer = styled.div`
    border: 2px solid rgba(242, 121, 53, 0.88);
    border-radius: 0.5em;
    height: auto;
    width: auto;
    padding: 0.2em;
    margin-left: 0.5em;
`
const AuthImage = styled.img`
    height: auto;
    width: 100%;
    align-self: center;

    @media (max-width: 712px) {
        width: 80%;
        height: auto;
    }
`
const AuthImageHeader = styled.h2`
    text-align: center;
    align-self: center;
    font-size: 2.9em;
    color: rgba(242, 121, 53, 0.76);
`
const AuthenticationCardheader = styled.h2`
    text-align: center;
    align-self: center;
    color: rgba(242, 121, 53, 0.77);
    padding: 0.3em;
    margin-bottom: 0.6em;
    font-size: 1.8em;
`

const AuthenticationCardText = styled.div`
    text-align: center;
    align-self: center;
    color: rgba(0, 0, 0, 0.66);
    padding: 0.3em;
    margin-bottom: 0.45em;
`
const PrimaryButton = styled.button`
    height: auto;
    width: 40%;
    align-self: center;
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


export const AuthenticationForm = (props) => {

    const emailFilter = (e) => {
        e.preventDefault()

        const enteredEmail = e.target.value

        if (enteredEmail !== "") {
            props.setEmail(enteredEmail)
        }
        
    }

    const ethAddressFilter = (e) => {
        e.preventDefault()

        const enteredEthAddress = e.target.value

        if (enteredEthAddress !== "") {
            props.setEthAddress(enteredEthAddress)
        }
        
    }

    const authenticate = () => {
        props.setAuthenticated(props.state.email, props.state.ethAddress)
    }

    return (
        <>
        <AuthenticationCard>
            <LoginLogo />
            <AuthenticationCardheader>
                {`Welcome to laury`}
            </AuthenticationCardheader>
            <AuthenticationCardText>
                {`Grab your free API Key by authenticating your email and ethereum addresses.`}
            </AuthenticationCardText>
            <AuthenticationCardText>
                {`If you need another key just re-authenticate!`}
            </AuthenticationCardText>

            <EmailInputContainer>
                <EmailLogoContainer>
                    <EmailLogo/>
                </EmailLogoContainer>
                <EmailInput onChange={emailFilter} spellcheck="false" maxlength="79" minlength="1" placeholder="email" autocomplete="off" />
            </EmailInputContainer>

            <EmailInputContainer>
                <EmailLogoContainer>
                    <EthLogo/>
                </EmailLogoContainer>
                <EmailInput onChange={ethAddressFilter} spellcheck="false" maxlength="79" minlength="1" placeholder="eth address" autocomplete="off" />               
            </EmailInputContainer>

            <PrimaryButton onClick={authenticate}>
                {props.state.buttonMessage}
            </PrimaryButton>
        </AuthenticationCard>
        </>
    )
}

const KeyBlock = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    height 40%;
    align-items: center;
    align-content: center;
    align-self: center;
    border: 3px solid rgba(242, 121, 53, 1);
    border-radius: 0.8em;
`
const CopyIcon = styled(FaRegCopy)`
    color: rgba(242, 121, 53, 1);
    height: auto;
    width: 100%;
`
const ApiKey = styled.p`
    text-align: right;
    font-weight: 600;
    font-size: 1.2em;
`

export const ApiCard = (props) => {
    return (
        <>
        <AuthenticationCard>
            <LoginLogo />
            <KeyBlock>
                <PrimaryButton style={{width: "auto"}}><CopyIcon /></PrimaryButton>
                <ApiKey>
                    {props.state.apiKey !== "" && props.state.apiKey}
                </ApiKey>
            </KeyBlock>


        </AuthenticationCard>
        </>
    )
}

const authenticationReducer = (state, action) => {
    switch (action.type) {
        case 'authenticated': {
            return {
                ...state,
                authenticated: action.payload
            }
        }
        case "email": {
            return {
                ...state,
                email: action.payload
            }
        }
        case 'ethAddress': {
            return {
                ...state,
                ethAddress: action.payload
            }
        }
        case 'apiKey': {
            return {
                ...state,
                apiKey: action.payload
            }
        }
        case 'buttonMessage': {
            return {
                ...state,
                buttonMessage: action.payload
            }
        }
            
        return state
    }
}

const initialState = {
    authenticated: false,
    email: "",
    ethAddress: "",
    apiKey: "",
    buttonMessage: "Get Key"
}

export const Authentication = () => {
    const [state, dispatch] = useReducer(authenticationReducer, initialState)

    const fetchApiKey = async (_email, _ethAddress) => {
        const response = await axios.get(`https://lauryapi.herokuapp.com/authenticate/?email=${_email}&ethAddress=${_ethAddress}`)
        const key = response.data.apiKey
        return key
    }

    const setAuthenticated = async (_email, _ethAddress) => {
        if (state.email !== "" && state.ethAddress !== "") {
            dispatch({ type: "buttonMessage", payload: "Authenticating.."})
            const key = await fetchApiKey(_email, _ethAddress)
            dispatch({type: "apiKey", payload: key})
            dispatch({ type: "authenticated", payload: true})
            
            console.log("authed")
        } 
        if (state.email == "" && state.ethAddress !== "" ) {
            dispatch({ type: "buttonMessage", payload: "Enter Email"})
        }
        if (state.ethAddress == "" && state.email !== "" ) {
            dispatch({ type: "buttonMessage", payload: "Enter Address"})
        }
    }

    const setEmail = (_email) => {
        dispatch({ type: "email", payload: _email })
        console.log(`email: ${_email}`)
    }

    const setEthAddress = (_ethAddress) => {
        dispatch({ type: "ethAddress", payload: _ethAddress })
        console.log(`eth addy: ${_ethAddress}`)
    }



    let formDisplay;
    if (state.authenticated) {
        formDisplay = <ApiCard  state={state}/>
    } else {
        formDisplay = <AuthenticationForm state={state} setEmail={setEmail} setEthAddress={setEthAddress} setAuthenticated={setAuthenticated} />
    }
    return (
        <>
            <PageContainer>
                <AuthenticationRow>
                    <AuthenticationColumn>
                        <AuthImageHeader>Authentication</AuthImageHeader>
                        <AuthImage src="/assets/images/authgirl.png" />
                    </AuthenticationColumn>
                    <AuthenticationColumn>

                    {formDisplay}

                     
                        

    

                    </AuthenticationColumn>

                </AuthenticationRow>
            </PageContainer>
        </>
    )
}

export default Authentication
