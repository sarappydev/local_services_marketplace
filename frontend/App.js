import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ServiceListScreen from './screens/ServiceListScreen';
import ServiceDetailsScreen from './screens/ServiceDetailsScreen';
import BookingScreen from './screens/BookingScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Local Services' }} />
        <Stack.Screen name="ServiceList" component={ServiceListScreen} options={{ title: 'Services' }} />
        <Stack.Screen name="ServiceDetails" component={ServiceDetailsScreen} options={{ title: 'Service Details' }} />
        <Stack.Screen name="Booking" component={BookingScreen} options={{ title: 'Book a Service' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'My Profile' }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Register' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}