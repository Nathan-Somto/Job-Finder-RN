import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '@screens/DrawerScreens/Home'
import EditProfile from '@screens/DrawerScreens/EditProfile'
import Applications from '@screens/DrawerScreens/Applications'
import Settings from '@screens/DrawerScreens/Settings'
export default function DrawerNavigator () {
  const Drawer = createDrawerNavigator()
  return (
  <Drawer.Navigator >
    <Drawer.Screen name="Home" options={{ drawerLabel: () => null }} component={Home}/>
    <Drawer.Screen name='EditProfile' component={EditProfile}/>
    <Drawer.Screen name="Applications" component={Applications}/>
    <Drawer.Screen name="Settings" component={Settings}/>
  </Drawer.Navigator>
  )
}
