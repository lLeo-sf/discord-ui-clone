import styled from 'styled-components';

import {  Props } from '.';

export const Button = styled.button<Props>`

    display:flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;
    margin-bottom: 8px;
    border-radius: ${props => props.isHome ? '25%' : '100%'};

    width: 48px;
    height: 48px;

    background-color: ${props => props.isHome ? 'var(--white)' : 'var(--primary)'};

    cursor: pointer;
    position: relative;

    > img {
        width: 44px;
        height: 44px;
    }

    &::before {
        width: 9px;
        height: 9px;

        position: absolute;
        
        left: -17px;
        top:calc(50% - 4.5px);

        background-color: var(--white);
        
        border-radius: 50%;

        content '';
        display: ${props => props.hasNotifications ? 'inline' : 'none'}
    }


    &::after {

        background-color: var(--notification);

        width: auto;
        height: 16px;
        
        padding: 0 4px;

        position: absolute;
        bottom: -4px;
        right: -4px;

        border-radius: 12px;
        border: 4px solid var(--dark);
        
        text-align: center;
        font-size: 13px;
        font-weight: bold;
        color: var(--white);

        content:'${props => props.mentions && props.mentions}';
        display: ${props => props.mentions && props.mentions > 0 ? 'flex' : 'none'};
    }

    :active, :hover{
        border-radius: 25%;
        transition: 0.3s;
        background-color: ${props => props.isHome ? 'var(--white)' : 'var(--discord)'}
    }

`;



