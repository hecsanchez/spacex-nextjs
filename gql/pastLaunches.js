import gql from 'graphql-tag';

export const PAST_LAUNCHES = gql`
    query launchesPast($limit: Int!) {
        launchesPast(limit: $limit) {
            mission_name
            links {
                flickr_images
                wikipedia
            }
            launch_date_utc
            launch_success
          }
      }
`;