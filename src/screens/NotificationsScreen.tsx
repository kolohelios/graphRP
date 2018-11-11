import * as React from 'react'
import { Text, View } from 'react-native'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const GET_PARTS = gql`
{
  part(id: 4) {
    name
    id
    whereUsed {
      id
      name
    }
    bom {
      id
      name
      bom {
        id
        name
        bom {
          id
          name
          bom {
            id
            name
          }
        }
      }
    }
  }
}
`

const Parts = () => (
  <Query query={GET_PARTS}>
    {({ loading, error, data }) => {
      if (loading) {
        return <Text>Loading...</Text>
      }
      if (error) {
        return <Text>Error!</Text>
      }
      return <Text>{JSON.stringify(data.part)}</Text>
    }}

  </Query>
)

export default class NotificationsScreen extends React.PureComponent {
  static path = '/notifications'
  static screenName = 'notifications'

  render() {
    return (
      <View>
        <Text>Notifications</Text>
        <Parts />
      </View>
    )
  }
}
