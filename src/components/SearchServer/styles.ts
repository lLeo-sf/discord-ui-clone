import styled from 'styled-components';

export const Container = styled.div`
    grid-area: SN;
    background: var(--quinary);

    display:flex;
    justify-content: center;
    align-items:center;
`;

export const Input = styled.input`
    width: 95%;
    height: 55%;

    background-color: var(--dark);
    border-radius: 5px;

    
    
    color: var(--white);

    ::-webkit-input-placeholder{
        color: var(--white);
        display:flex;
        text-align:center;
    }
`;


