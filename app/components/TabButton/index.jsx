import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Text, useTheme } from '@rneui/themed'

export default function TabButton ({ text, onChange }) {
  const [isPressed, setIsPressed] = React.useState(false)
  function handlePress () {
    setIsPressed((prevState) => !prevState)
    if (onChange) {
      onChange({ [text]: isPressed })
    }
  }
  const { theme } = useTheme()
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={styles.tab(isPressed, theme.colors.primary)}
    >
      <Text style={styles.tabText(isPressed)}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  tab: (isSelected, primaryColor) => ({
    paddingHorizontal: 25,
    borderRadius: 8,
    marginRight: 10,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isSelected ? primaryColor : '#E0E0E0'
  }),
  tabText: (isSelected) => ({
    fontSize: 15,
    fontWeight: '400',
    color: isSelected ? '#fff' : '#828282'
  })
})
