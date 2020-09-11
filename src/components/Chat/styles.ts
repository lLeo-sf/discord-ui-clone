import styled from 'styled-components';


export const Container = styled.div`
    grid-area: C;

    width: 100%;
    height: 100%;

    display: flex;
    align-items: end;
    justify-content: flex-end;
    flex-direction: column;
    background:var(--primary);

    .line{
        width: 100%;
        border: 1px solid var(--white);
    }

    overflow-y: scroll;

    ::-webkit-scrollbar-track {
        background-color: var(--dark);
        border-radius: 10px;
    }
    ::-webkit-scrollbar {
        width: 6px;
        background: var(--primary);
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: var(--secondary);
        border-radius: 10px;
    }
`;

export const UserPic = styled.img`
    max-width: 100px;
    max-height: 100px;
    margin: 5% 2%;
    position:relative;
`;

export const Username = styled.h3`
    color: var(--white);
    position:absolute;
    margin: -3% 2%;
    font-weight: bold;
`;

export const Message = styled.span`
    color: var(--white);
    font-size: 10pt;
    margin: 1% 2.4%;

`;

export const Area = styled.div`
    width: 100%;
    height: 100%;

    display:flex;
    align-items: center;
    flex-direction: column;
`;

export const Line = styled.div`
    width: 98%;
    height: 60px;
    margin-top: 20px;
    margin-bottom: 100px;
`;

export const Info = styled.div`
    

    .PicUser {
        max-width: 42px;
        max-height: 42px;
        margin: auto 5%;
    }

    .Username{
        color: var(--white);
        margin-left: -4%;

    }

    .Date{
        color: var(--white);
        margin-left: 1%;
        opacity: 0.4;
        font-size: 10pt;
    }
`;

export const Mensagens = styled.div`
    color: var(--white);
    margin: 1% 5%;
`;

export const New = styled.input`
    width: 96%;
    height: 50px;

    background-color: var(--dark);

    border-radius: 10px;
    margin-top:20px;
    padding-left: 15px;

    color: var(--white);
    
`;