import Head from 'next/head'
import { graphql } from 'react-apollo'

import { COMPANY } from '@/gql/company';

import Icon from '@/components/Icon';

import Loading from '@/containers/Loading';
import NavBar from '@/containers/NavBar';

const totalItems = 36;
const itemsPerPage = 12;

const About = ({data}) => {
  console.log('data', data)
  return (
    <div>
      <Head>
        <title>SpaceX Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main class="lg:relative max-w-7xl mx-auto sm:px-6 lg:px-8">
        <NavBar/>
        <Loading loading={data.loading}/>
        {data && data.company && (
            <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
                <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
                    <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
                    {data.company.name}
                    </h2>
                    <p class="mt-3 max-w-md mx-auto text-lg text-gray-700 sm:text-xl md:mt-5 md:max-w-3xl">
                    {data.company.summary}
                    </p>
                    <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
                        <div class="rounded-md shadow">
                            <a href={data.company.links.website} class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                                Learn mroe
                            </a>
                        </div>
                    </div>
                    <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
                        <a href={data.company.links.twitter} class="mr-5" target='_blank'>
                            <Icon name='twitter'/>
                        </a>
                        <a href={data.company.links.elon_twitter} class="mr-5" target='_blank'>
                            <Icon name='twitter'/>
                        </a>
                        <a href={data.company.links.flickr} target='_blank'>
                            <Icon name='flickr'/>
                        </a>
                    </div>
                </div>
            </div>
        )}
        <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute mt-20 lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
            <img class="absolute inset-0 w-full h-full object-cover mt-10 pr-8" src="https://live.staticflickr.com/65535/49971436642_cf8bbc38e0_4k.jpg" alt="Woman on her phone" />
        </div>
    </main>
    </div>
  )
}

export default graphql(COMPANY, {
  options: {
    notifyOnNetworkStatusChange: true,
  },
  props: ({data}) => {
    return ({
      data,
    })
  }
})(About)