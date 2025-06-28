"use client";

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { PropsWithChildren } from "react";

const httpLink = createHttpLink({
  uri: "https://api.escuelajs.co/graphql",
});

export const ApolloWrapper = ({ children }: PropsWithChildren) => {
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
