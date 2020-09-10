import React from 'react';

import { FaPlus } from 'react-icons/fa';

import { Container, Title} from './styles';

import UserCard from '../UserCard';

const ClientList: React.FC = () => {
    return(
        <Container>
            <Title>
                <span> Mensagens diretas</span>
                <FaPlus className="plus"/>
            </Title>
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />

        </Container>
    )
}

export default ClientList;