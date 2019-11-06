import { gql } from 'apollo-boost';

const getReposQuery = gql`
  {
    user(login:"jormee"){
      repositories(first: 100){
        nodes {
          id
          name
          description
          homepageUrl
          url
          repositoryTopics(first: 50){
            nodes{
              topic{
                name
              }
            }
          }
        }
      }
    }
  }
`

export{
  getReposQuery
}