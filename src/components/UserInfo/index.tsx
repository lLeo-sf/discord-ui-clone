import React from 'react';

import { FaKeyboard, FaMicrophone, FaHeadset, FaCog } from 'react-icons/fa';

import Picture from '../../assets/user.png';

import { Container, 
         Pic, 
         Info, 
         Username, 
         Status, 
         Mic, 
         Sound, 
         Config } from './styles';

const UserInfo: React.FC = () => {
    return (
        <Container>
            <Pic src={Picture}>

            </Pic>
            <Info>
                <Username>
                    <span>Username</span>
                </Username>
                <Status>
                    <FaKeyboard /> <span>Coding</span>
                </Status>
            </Info>
            <Mic>
                <FaMicrophone />
            </Mic>
            <Sound> 
                <FaHeadset />
            </Sound>
            <Config>
                <FaCog />
            </Config>
        </Container>
    )
}

export default UserInfo;