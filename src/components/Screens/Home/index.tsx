import React from 'react';

import { Grid } from './styles';

import ServerList from '../../ServerList';
import SearchServer from '../../SearchServer';
import ClientList from '../../ClientList';
import UserInfo from '../../UserInfo';
import ClientInterface from '../../ClientInterface';
import Chat from '../../Chat';



const Home: React.FC = () => {
     return (
         <Grid>
            <ServerList />
            <SearchServer />
            <ClientList />
            <UserInfo />
            <ClientInterface />
            <Chat />
         </Grid>
     )
}

export default Home;