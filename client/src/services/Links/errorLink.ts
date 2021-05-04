import { onError } from 'apollo-link-error';

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  console.log(graphQLErrors);
  console.log(networkError);
}) as any;
