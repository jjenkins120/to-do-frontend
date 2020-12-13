import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'
import SignInScreen from './src/screens/SignInScreen'
import CreateScreen from './src/screens/CreateScreen'
import EditScreen from './src/screens/EditScreen'
import ShowScreen from './src/screens/ShowScreen'
import { Provider } from './src/context/TodoContext'

const navigator = createStackNavigator(
  {
    SignIn: SignInScreen,
    Home: HomeScreen, 
    Create: CreateScreen,
    Edit: EditScreen, 
    Show: ShowScreen
  },
  {
    initialRouteName: 'SignIn',
    defaultNavigationOptions: {
      title: 'To-Do List'
    }
  }
)

const App = createAppContainer(navigator)

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}