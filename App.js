import { useFonts } from 'expo-font';
import { StyleSheet, StatusBar } from 'react-native';
import Text from './src/component/text/text';
import { colors } from './src/theme/color';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screen/home';
import Details from './src/screen/details';


//creating stacknevigator
const Stack = createNativeStackNavigator();


export default function App() {

  // custom font setup
  const [loaded] = useFonts({
    'primary': require('./assets/font/UbuntuCondensed-Regular.ttf'),
    'primaryBold': require('./assets/font/Kanit-Bold.ttf')
  })
  if (!loaded) {
    return <Text>loading font...</Text>
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
