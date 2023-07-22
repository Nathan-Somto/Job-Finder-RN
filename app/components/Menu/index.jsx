import { TouchableOpacity, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
export default function Menu ({ handlePress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => handlePress()}>
      <MaterialIcons name="segment" size={22} color={'#fff'} />
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    backgroundColor: '#3E4F88',
    padding: 2,
    borderRadius: 8,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
