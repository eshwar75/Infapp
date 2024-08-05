/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import { AppNavigator } from './app/navigators/AuthNavigator'
import { Text } from 'react-native'

function App(): React.JSX.Element {
  return (
    <>
      <AppNavigator />
    </>
  )
}

export default App
