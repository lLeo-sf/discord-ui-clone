import styled from 'styled-components';

export const Container = styled.div`
    grid-area: UI;

    width: 100%;
    height: 100%;

    background: var(--tertiary);

    display:flex;
    justify-content:center;
    align-items:center;
`;

export const Pic = styled.img`
    flex: 1;
    height: 80%;
    border-radius: 100%;
    margin: 2%;

`;

export const Info = styled.div`
    flex: 2;
    display:flex;
    flex-direction:column;
`;

export const Username = styled.span`
    font-size: 10pt;
    font-weight: bold;
    color: var(--white);
    margin-bottom: 2%;

`;

export const Status = styled.span`
    font-size: 8pt;
    color: var(--white);
    margin-bottom: 2%;

`;

export const Mic = styled.span`
    flex: 1;
    color:var(--white);
    cursor:pointer;
`;

export const Sound = styled.span`
    flex: 1;
    color:var(--white);
    cursor:pointer;
`;

export const Config = styled.span`
    flex: 1;
    color:var(--white);
    cursor:pointer;
`;