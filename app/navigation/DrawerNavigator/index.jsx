import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '@screens/DrawerScreens/Home'
import EditProfile from '@screens/DrawerScreens/EditProfile'
import Applications from '@screens/DrawerScreens/Applications'
import Settings from '@screens/DrawerScreens/Settings'
import Menu from '@components/Menu'
import UserAvatar from '@components/UserAvatar'

export default function DrawerNavigator () {
  // @Todo: get profileImg from async storage
  const Drawer = createDrawerNavigator()
  const profileImg =
    'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=100&q=60'
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerRight: () => <UserAvatar src={profileImg} size="small" />,
        headerLeft: () => <Menu />,
        headerStyle: {
          height: 75
        }
      }}
    >
      <Drawer.Screen
        name="Home"
        options={{ drawerLabel: () => null, headerTitle: '' }}
        component={Home}
      />
      <Drawer.Screen name="EditProfile" component={EditProfile} />
      <Drawer.Screen name="Applications" component={Applications} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  )
}
