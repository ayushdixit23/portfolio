
const url = "https://gql.hashnode.com";

export const fetchGraphQL = async (query:string, variables = {}) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 3600 }, // Optional: revalidate every hour
  });

  const json = await res.json();
  if (json.errors) {
    console.error("GraphQL Error:", json.errors);
    throw new Error("Failed to fetch GraphQL data.");
  }

  return json.data;
};

export const fetchParticularBlog = async (query: string, variables: any = {}) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const { data, errors } = await res.json();

  if (errors) {
    console.error(errors);
    throw new Error("Error fetching data");
  }

  return data;
};
