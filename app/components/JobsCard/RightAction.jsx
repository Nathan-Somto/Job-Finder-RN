import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'
import Animated from 'react-native-reanimated'
export default function RightAction ({ dragX }) {
  const trans = dragX.interpolate({
    inputRange: [-100, -50, 0],
    outputRange: [0, 0, -100]
  })

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateX: typeof trans === 'number' ? trans : 0 }] }
      ]}
    >
      <Entypo name={'heart'} color={'#fff'} size={24} />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF4081', // deep pink
    borderRadius: 12,
    padding: 2,
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 75,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4
  }
})
