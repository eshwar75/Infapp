import { useEffect, useRef } from 'react'
import { BackHandler } from 'react-native'
import {
  PartialState,
  NavigationState,
  createNavigationContainerRef,
  CommonActions,
  NavigationProp,
} from '@react-navigation/native'

export const navigationRef = createNavigationContainerRef()

/**
 * Gets the current screen from any navigation state.
 */
export function getActiveRouteName(
  state: NavigationState | PartialState<NavigationState>,
) {
  const RouteIndex = state.index
  if (RouteIndex) {
    const route = state.routes[state.index]

    // Found the active route -- return the name
    if (route && !route.state) return route.name

    // Recursive call to deal with nested routers
    if (route && route.state) {
      return getActiveRouteName(route.state)
    }
  }
  return ''
}

export function useBackButtonHandler(canExit: (routeName: string) => boolean) {
  const canExitRef = useRef(canExit)

  useEffect(() => {
    canExitRef.current = canExit
  }, [canExit])

  useEffect(() => {
    const onBackPress = () => {
      if (!navigationRef.isReady()) {
        return false
      }

      const routeName = getActiveRouteName(navigationRef.getRootState())

      if (canExitRef.current(routeName)) {
        BackHandler.exitApp()
        return true
      }

      if (navigationRef.canGoBack()) {
        navigationRef.goBack()
        return true
      }

      return false
    }

    BackHandler.addEventListener('hardwareBackPress', onBackPress)

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', onBackPress)
  }, [])
}

export function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack()
  }
}

export function resetRoot(params = { index: 0, routes: [] }) {
  if (navigationRef.isReady()) {
    navigationRef.resetRoot(params)
  }
}

export const saunaSelectNavigate = (
  destination: 'SaunaSelection',
  navigation: any,
) => {
  // UserStore.switchNavigation('Home')
  navigation.navigate(destination)
}

export const resetNavigationState = (
  navigation: NavigationProp<any>,
  routeName: string,
) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: routeName }],
    }),
  )
}
