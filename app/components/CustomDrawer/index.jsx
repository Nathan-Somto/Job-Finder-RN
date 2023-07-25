import { DrawerContentScrollView } from '@react-navigation/drawer'
import { Text, Avatar } from '@rneui/themed'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo, Octicons, Feather } from '@expo/vector-icons'
export default function CustomDrawer ({ navigation }) {
  const user = {
    firstName: 'Nathan Somto',
    email: 'mkparusomtochi26@gmail.com',
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=60'
  }
  const drawerLinks = [
    {
      title: 'Edit Profile',
      icon: 'user',
      screen: 'EditProfile',
      iconColor: '#4c5'
    },
    { title: 'Favourites', icon: 'heart', screen: 'Favourite', iconColor: '#f45' },
    {
      title: 'Notification Settings',
      icon: 'gear',
      screen: 'Settings',
      iconColor: '#45f'
    }
  ]

  const renderDrawerLinks = () => {
    return drawerLinks.map((link) => (
      <TouchableOpacity
        key={link.title}
        style={styles.drawerLink}
        onPress={() => navigation.navigate(link.screen)}
      >
        <View style={[styles.linkIcon, { backgroundColor: link.iconColor }]}>
          {link.icon === 'user'
            ? (
            <Feather name="user" color={'#fff'} size={16} />
              )
            : link.icon === 'heart'
              ? (
            <Entypo name="heart" color={'#fff'} size={16} />
                )
              : (
            <Octicons name="gear" color={'#fff'} size={16} />
                )}
        </View>
        <Text style={styles.linkText}>{link.title}</Text>
      </TouchableOpacity>
    ))
  }

  return (
    <DrawerContentScrollView>
      <View style={styles.drawerHeader}>
        <Avatar source={{ uri: user.avatar }} size={'large'} rounded />
        <Text h2 h2Style={{ fontSize: 25, fontWeight: '600' }} style={styles.firstName}>
          {user.firstName}
        </Text>
        <Text style={{ opacity: 0.5 }}>{user.email}</Text>
      </View>
      <View style={styles.drawerLinksContainer}>{renderDrawerLinks()}</View>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  drawerHeader: {
    paddingVertical: 20,
    paddingHorizontal: 22
  },
  firstName: {
    color: '#333',
    marginBottom: 7,
    marginTop: 15
  },
  drawerLinksContainer: {
    marginTop: 5
  },
  drawerLink: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10
  },
  linkIcon: {
    width: 32,
    height: 32,
    marginRight: 10,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  linkText: {
    fontSize: 18
  }
})
