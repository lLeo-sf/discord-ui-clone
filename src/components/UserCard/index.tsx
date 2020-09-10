import React from 'react';

import { Container, Pic, Name } from './styles';

import UserPic from '../../assets/user.png';

const UserCard: React.FC = () => {
    return (
        <Container>
            <Pic src={UserPic}>

            </Pic>
            <Name>
                <span>Username</span>
            </Name>
        </Container>
    )
}

export default UserCard;