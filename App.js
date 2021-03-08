import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';

const Stack = createStackNavigator();

// This style will be applied to all the screens
const globalScreenOptions = {
  headerStyle : {backgroundColor : '#2C6BED'},
  headerTitleStyle : {color : 'white'}, 
  headerTintColor : 'white', // All icons will be white in color
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>

        <Stack.Navigator screenOptions={globalScreenOptions}>
          <Stack.Screen name="Login" component={LoginScreen} options={{title : 'Login'}} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{title : 'Register'}} />
        </Stack.Navigator>


        {/* <View style={styles.container}>
          <Text>Let's Build Signal...</Text>
          <StatusBar style="auto" />
        </View> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
