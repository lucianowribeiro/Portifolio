import { GraphQLClient, gql as GRAPHql } from 'graphql-request';

async function CMSGraphCLient(query) {
  const TOKEN = process.env.DATOCMS_TOKEN;
  const DATOCMSURL = 'https://graphql.datocms.com/';

  const client = new GraphQLClient(DATOCMSURL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  try {
    const contents = await client.request(query);
    return contents;
  } catch (error) {
    return 'Error on the graphql request!';
  }
}
export default CMSGraphCLient;
export const gql = GRAPHql;
