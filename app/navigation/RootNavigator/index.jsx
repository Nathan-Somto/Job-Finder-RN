// import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DrawerNavigator from '../DrawerNavigator'
import Onboarding from '@screens/StackScreens/Onboarding'
import Welcome from '@screens/StackScreens/Welcome'
import Details from '@screens/StackScreens/Details'
import Apply from '@screens/StackScreens/Apply'
import Filters from '@screens/StackScreens/Filters'
import Search from '@screens/StackScreens/Search'

export default function RootNavigator () {
  const Stack = createStackNavigator()
  // const ProfileUrl = 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'
  return (
        <Stack.Navigator
          screenOptions={
            {
              headerShown: false
            }
          }
        >
            <Stack.Screen name='Onboarding' component={Onboarding} />
            <Stack.Screen name='Home' component={DrawerNavigator} />
            <Stack.Screen name='Welcome' component={Welcome}/>
            <Stack.Screen name='Details' component={Details}/>
            <Stack.Screen name='Apply' component={Apply}/>
            <Stack.Screen name='Filters'options={{ presentation: 'modal' }} component={Filters} />
            <Stack.Screen name='Search' options={{ presentation: 'modal' }} component={Search} />
        </Stack.Navigator>
  )
}
