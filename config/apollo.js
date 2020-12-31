import { ApolloClient } from '@apollo/client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from  'apollo-link-http';

import { Platform  } from 'react-native';

const uri = Platform.OS === 'ios' ? 'http://localhost:8081' : 'http://10.0.2.2:8081/';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri
    })
});

export default client;
