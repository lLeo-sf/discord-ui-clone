import React from 'react';
import { Grid } from './styles';

import ServerList from '../ServerList';
import SearchServer from '../SearchServer';
import ClientList from '../ClientList';
import UserInfo from '../UserInfo';


const Layout: React.FC = () => {
     return (
         <Grid>
             <ServerList />
             <SearchServer />
             <ClientList />
             <UserInfo />
         </Grid>
     )
}

export default Layout;