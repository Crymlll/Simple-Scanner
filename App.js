import React, { lazy, Suspense } from "react"

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Text } from "react-native"

const Camera = lazy(() => import("./src/screens/Camera"))

const Stack = createNativeStackNavigator()

const App = () => {
	return (
		<Suspense fallback={<Text>Loading....</Text>}>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="Camera"
					screenOptions={{ headerShown: false }}
				>
					<Stack.Screen name="Camera" component={Camera} />
				</Stack.Navigator>
			</NavigationContainer>
		</Suspense>
	)
}

export default App
