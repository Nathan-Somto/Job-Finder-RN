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
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Entypo, AntDesign } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'

export default function RootNavigator () {
  const Stack = createStackNavigator()
  // const ProfileUrl = 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({ navigation }) => ({
          headerShown: true,
          headerBackTitleVisible: false,
          headerTitle: '',
          headerShadowVisible: false,
          headerRight: () => (
            <TouchableOpacity style={styles.btnContainer}>
              <Entypo name="share" size={24} color="#808080" />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.btnContainer}
            >
              <AntDesign name="arrowleft" size={24} color="#808080" />
            </TouchableOpacity>
          ),
          headerStyle: {
            height: 75
          }
        })}
      />
      <Stack.Screen name="Apply" component={Apply} />
      <Stack.Screen
        name="Filters"
        options={{ presentation: 'modal' }}
        component={Filters}
      />
      <Stack.Screen
        name="Search"
        options={
          ({ navigation }) => ({
            headerShown: true,
            headerBackTitleVisible: false,
            headerTitle: 'Search',
            headerShadowVisible: false,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.btnContainer}
              >
                <AntDesign name="arrowleft" size={24} color="#808080" />
              </TouchableOpacity>
            ),
            headerStyle: {
              height: 75
            }
          })
        }
        component={Search}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#eee',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginHorizontal: 10
  }
})
