import Styled from 'styled-components';

export const Container = Styled.div`

    grid-area: CL;

    width: 100%;
    height: 100%;

    background:var(--secondary);

    overflow-y:scroll;

    ::-webkit-scrollbar{
        display: none;
    }

    display:flex;
    align-items: center;
    flex-direction: column;


`;

export const Title = Styled.div`
    font-size: 9pt;
    color: var(--white);
    float:left;
    text-transform: uppercase;

    margin-top: 15px;

        
    .plus {
        margin-left: 20px;
        float: right;
        cursor: pointer;
        color: var(--white);

    }
`;





