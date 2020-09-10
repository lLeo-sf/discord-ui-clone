import styled from 'styled-components';

export const Container = styled.div`

    grid-area: CL;

    width: 93%;
    height: 45px;

    margin-top: 20px;

    display:flex;
    flex-direction:row;

    border-radius: 5px;

    :hover{
        background: var(--secondary);

        &::after{
            float:right;
            margin-right: 5%;
            display: flex;
            align-items: center;

            color: var(--white);
            cursor: pointer;
            font-size: 9pt;
            font-weight: bold;

            content: "X";
        }
    }

    
`;

export const Pic = styled.img`
    flex: 1;
    height: 40px;
    border-radius: 100%;
    margin: 1%;
    
    float:left;
`;

export const Name = styled.span`
    flex: 4;
    display: flex;
    align-items: center;
    margin-left: 4%;

    color: var(--white);    
    font-size: 11pt;

    float:left;
`;

