import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '@screens/DrawerScreens/Home'
import EditProfile from '@screens/DrawerScreens/EditProfile'
import Applications from '@screens/DrawerScreens/Applications'
import Settings from '@screens/DrawerScreens/Settings'
import Menu from '@components/Menu'
import UserAvatar from '@components/UserAvatar'
import CustomDrawer from '@components/CustomDrawer'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default function DrawerNavigator () {
  // @Todo: get profileImg from async storage
  const Drawer = createDrawerNavigator()
  const profileImg =
    'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=100&q=60'
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerShadowVisible: false,
        headerRight: () => <UserAvatar src={profileImg} size="small" />,
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
        },
        drawerStyle: {
          borderTopRightRadius: 20,
          borderBottomRightRadius: 8,
          overflow: 'hidden'
        }
      })}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Home"
        options={({ navigation }) => ({
          headerLeft: () => <Menu handlePress={navigation.toggleDrawer} />,
          drawerLabel: () => null,
          headerTitle: ''
        })}
        component={Home}
      />
      <Drawer.Screen name="EditProfile" options={{
        headerStyle: {
          backgroundColor: '#f6f6f6'
        },
        headerRight: null,
        headerTitle: 'Profile'
      }} component={EditProfile} />
      <Drawer.Screen name="Applications" component={Applications} />
      <Drawer.Screen name="Settings"
      options={{
        headerStyle: {
          backgroundColor: '#f6f6f6',
          height: 75
        },
        headerTitle: 'Notifcation Settings'
      }}
      component={Settings} />
    </Drawer.Navigator>
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
    marginHorizontal: 10
  }
})
