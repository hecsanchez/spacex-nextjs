import gql from 'graphql-tag';

export const COMPANY = gql`
    query company {
        company {
            name
            summary
            links {
              elon_twitter
              flickr
              twitter
              website
            }
          }
      }
`;