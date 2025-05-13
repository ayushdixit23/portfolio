export const GET_POSTS = `
  query GetPosts {
    publication(host: "ayushdixit.hashnode.dev") {
      title
      posts(first: 3) {
        edges {
          node {
            title
            brief
            slug
            url
            coverImage {
              url
            }
            author {
            name
            profilePicture
          } 
            publishedAt
          }
        }
      }
    }
  }
`;


export const GET_SINGLE_POST = `
  query getPostBySlug($publicationId: ObjectId!, $slug: String!) {
      publication(id: $publicationId) {
        post(slug: $slug) {
          title
          subtitle
          coverImage {
            url
          }
          content {
            html
          }
          author {
            name
            profilePicture
          }
        }
      }
    }
`;