import Head from 'next/head'
import moment from 'moment-timezone';
import withApollo from '@/lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import { PAST_LAUNCHES } from '@/gql/pastLaunches';

const Home = () => {
  const { loading, error, data, fetchMore } = useQuery(PAST_LAUNCHES, { 
    variables: {
      limit: 12
    }
  });

  const imageUrl = (images) => (
    images[
      Math.floor(Math.random() * images.length)
    ]
  );

  const launchDate = (date) => (
    moment(date)
      .tz('America/Mexico_City')
      .format('DD MMM YY ha z')
  );

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data && data.launchesPast && data.launchesPast.map(item=>{
            return( 
            <li class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-shrink-0">
                <img class="h-48 w-full object-cover" src={imageUrl(item.links.flickr_images)} alt="" />
              </div>
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <a href="#" class="block">
                    <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                      {item.mission_name}
                    </h3>
                    <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap">
                      <div class="ml-4 mt-2 flex-shrink-0">
                        <p class="leading-6 font-medium text-gray-600">
                          {launchDate(item.launch_date_utc)}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <a href={item.links.wikipedia} type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700">
                    Read more
                  </a>
                </div>
              </div>
            </li>
          )})}
        </ul>
      </div>
      </main>

      <footer>
        
      </footer>
    </div>
  )
}

export default withApollo({ ssr: true })(Home);
