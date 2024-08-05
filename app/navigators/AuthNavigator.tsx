import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../Screens/SignInScreen/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { ForgotPassword } from '../Screens/SignInScreen/ForgotPasswordScreen';
import { SignUp } from '../Screens/SignUpScreen/SignUp';
import { MobileVerfiy } from '../Screens/SignUpScreen/MobileVerfiy';
import { CreatePassword } from '../Screens/SignInScreen/CreatePassword';
import { HomeScreen } from '../Screens/HomeScreen/HomeScreen';
import { Portfolio } from '../Screens/PortfolioScreen/Portfolio';
import { MarketTrends } from '../Screens/MarketTrendsScreen/MarketTrends';

export type LoginNavigatorParamList = {
	signIn: undefined;
	signUp: undefined;
	mobileVerfiy: undefined;
	createPassword: undefined;
	homeScreen: undefined;
	portfolio: undefined;
	marketTrends: undefined;
	forgotPassword: {
		email: string;
	};
};

const Stack = createNativeStackNavigator<LoginNavigatorParamList>();

const AuthNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			// initialRouteName="homeScreen"
			initialRouteName="signIn"
		>
			<Stack.Screen name="signIn" component={SignIn} />
			<Stack.Screen name="signUp" component={SignUp} />
			<Stack.Screen name="forgotPassword" component={ForgotPassword} />
			<Stack.Screen name="mobileVerfiy" component={MobileVerfiy} />
			<Stack.Screen name="createPassword" component={CreatePassword} />
			<Stack.Screen name="homeScreen" component={HomeScreen} />
			<Stack.Screen name="marketTrends" component={MarketTrends} />
			<Stack.Screen name="portfolio" component={Portfolio} />
		</Stack.Navigator>
	);
};

interface NavigationProps
	extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

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
	);
};

AppNavigator.displayName = 'AppNavigator';

// const exitRoutes = ['welcome']
// export const canExit = (routeName: string) => exitRoutes.includes(routeName)
