import Head from 'next/head'
import { graphql } from 'react-apollo'

import { PAST_LAUNCHES } from '@/gql/pastLaunches';
import Cards from '@/containers/Cards';
import Loading from '@/containers/Loading';
import NavBar from '@/containers/NavBar';
import Pagination from '@/containers/Pagination';

const totalItems = 36;
const itemsPerPage = 12;

const Home = ({data, loadMorePosts}) => {
  console.log('data.loading', data.loading)
  return (
    <div>
      <Head>
        <title>SpaceX Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar/>
        <Loading loading={data.loading}/>
        <Cards {...data}/>
        <Pagination
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onNext={(page) => loadMorePosts(page)}
        />
      </main>
    </div>
  )
}

export default graphql(PAST_LAUNCHES, {
  options: {
    variables: {
      limit: itemsPerPage,
      offset: 0,
    },
    notifyOnNetworkStatusChange: true,
  },
  props: ({data}) => {
    return ({
      data,
      loadMorePosts: (page) => {
        return data.fetchMore({
          variables: {
            limit: 12,
            offset: 12 * page
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) {
              return previousResult
            }

            return (Object.assign({}, previousResult, {
              launchesPast: fetchMoreResult.launchesPast, 
            }))
          }
        })
      }
    })
  }
})(Home)