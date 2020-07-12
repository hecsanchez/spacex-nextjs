import '@/styles/base.css'
import apolloClient from '@/lib/apollo';
import { ApolloProvider } from '@apollo/react-hooks';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const App = ({ Component, pageProps }) => (
  <ApolloProvider client={apolloClient}>
    <Component {...pageProps} />
  </ApolloProvider>
)

export default App;