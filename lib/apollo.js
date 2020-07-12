import ApolloClient, { InMemoryCache } from 'apollo-boost';
 
const data = {
  pastLaunches: [],
  currentPage: 1,
};

const cache = new InMemoryCache();
cache.writeData({ data });

const apolloClient = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache,
});

export default apolloClient