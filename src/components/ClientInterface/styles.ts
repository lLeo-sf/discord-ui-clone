import styled from 'styled-components';


export const Container = styled.div`
    grid-area: CI;

    width: 100%;
    height: 100%;

    background: var(--tertiary);
`;

export const UserInfo = styled.div`
    float: left;

    flex: 1;
    display:flex;
    align-items: center;

    height: 100%;
    position:relative;

    h3 {
        color: var(--symbol);
        font-size: 18pt;
        margin-left: 18%;
        text-align:center;
    }
    span {
        color: var(--white);
        margin-left: 5%;
        margin-top: 5%;
        font-weight: bold;
    }

    &::after{
        position:absolute;
        width: 40px;
        height: 20px;
        background-color:white;

    }

`;



export const UserActions = styled.div`
    float: right;
    flex: 2;
    display:flex;
    align-items: center;
    height: 100%;
    color: var(--white);

    .IconAction {
        margin-right: 20px;
        cursor: pointer;
        opacity: 0.4;

    }

    .IconAction:hover{
        opacity: 1.0;
    }

    .searchAction{
        height: 25px;
        border-radius: 5px;
        padding-left: 10px;
        margin-right: 15px;
        background-color:var(--dark);
        color: var(--white);
    }


`;
