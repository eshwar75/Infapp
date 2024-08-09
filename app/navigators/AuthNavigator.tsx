import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SignIn } from '../Screens/SignInScreen/SignIn'
import { NavigationContainer } from '@react-navigation/native'
import { SignUp } from '../Screens/SignUpScreen/SignUp'
import { MobileVerfiy } from '../Screens/SignUpScreen/MobileVerfiy'
import { CreatePassword } from '../Screens/SignInScreen/CreatePassword'
import { HomeScreen } from '../Screens/HomeScreen/HomeScreen'
import { Portfolio } from '../Screens/PortfolioScreen/Portfolio'
import { MarketTrends } from '../Screens/MarketTrendsScreen/MarketTrends'
import { Notification } from '../Screens/Notification/Notification'
import { IndividualPortfolio } from '../Screens/IndividualPortfolio/IndividualPortfolioScreen'
import { MailVerifyScreen } from '../Screens/SignInScreen/MailVerifyScreen'

export type LoginNavigatorParamList = {
  signIn: undefined
  signUp: undefined
  mobileVerfiy:
    | {
        createPasswordScreen?: boolean
        data?:
          | {
              email: string
              firstName: string
              lastname: string
            }
          | undefined
      }
    | undefined
  createPassword: {
    data?: {
      email: string
      firstName: string
      lastname: string
    }
  }
  homeScreen: undefined
  portfolio: undefined
  marketTrends: undefined
  notification: undefined
  individualPortfolio: { screenheading: string }
  mailVerifyScreen: {
    email: string
  }
}

const Stack = createNativeStackNavigator<LoginNavigatorParamList>()

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='signIn'
    >
      <Stack.Screen name='signIn' component={SignIn} />
      <Stack.Screen name='signUp' component={SignUp} />
      <Stack.Screen name='mailVerifyScreen' component={MailVerifyScreen} />
      <Stack.Screen name='mobileVerfiy' component={MobileVerfiy} />
      <Stack.Screen name='createPassword' component={CreatePassword} />
      <Stack.Screen name='homeScreen' component={HomeScreen} />
      <Stack.Screen name='marketTrends' component={MarketTrends} />
      <Stack.Screen name='portfolio' component={Portfolio} />
      <Stack.Screen name='notification' component={Notification} />
      <Stack.Screen name='individualPortfolio' component={IndividualPortfolio} />
    </Stack.Navigator>
  )
}

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  //   const routeNameRef = useRef<string>()

  return (
    // <NavigationContainer
    //   ref={navigationRef}
    //   {...props}
    //   onReady={() => {
    //     routeNameRef.current = navigationRef.getCurrentRoute()?.name
    //   }}
    //   onStateChange={async () => {
    //     routeNameRef.current = navigationRef.getCurrentRoute()?.name
    //   }}
    // >
    <NavigationContainer {...props}>
      <AuthNavigator />
    </NavigationContainer>
  )
}

AppNavigator.displayName = 'AppNavigator'

// const exitRoutes = ['welcome']
// export const canExit = (routeName: string) => exitRoutes.includes(routeName)
