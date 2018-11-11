import * as React from 'react'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'

interface IProps {
  children: React.ReactNode
}

const httpLink = createHttpLink({
  uri: 'http://localhost:8181/graphql'
})

const authLink = setContext((_, { headers }) => {
  // TODO HACK the following token works though we need to consume the auth container instead of hard-coding
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTQxODMwNjU4fQ.7z6z0gENW0OMigXy1zAvGqCopTnCmgLnqrGlSww31zM'
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : '',
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default (props: IProps) =>
  <ApolloProvider client={client}>
    {props.children}
  </ApolloProvider>
