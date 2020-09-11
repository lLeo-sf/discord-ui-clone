import React from 'react';


import { FaPhone, FaVideo, FaTag, FaUserPlus, FaBox, FaHandsHelping } from 'react-icons/fa';
import { Container, UserInfo, UserActions } from './styles';
 

const ClientInterface: React.FC = () => {
    return (
        <Container>
            <UserInfo>
                <h3>@</h3>
                <span>Username</span>
            </UserInfo>
            <UserActions>
                <FaPhone className="IconAction"/>
                <FaVideo className="IconAction"/>
                <FaTag className="IconAction"/>
                <FaUserPlus className="IconAction"/>
                <input placeholder="Buscar" className="searchAction"></input>
                <FaBox className="IconAction"/>
                <FaHandsHelping className="IconAction"/>
            </UserActions>
        </Container>
    )
}

export default ClientInterface;