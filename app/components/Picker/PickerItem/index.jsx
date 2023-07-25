import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Text, useTheme } from '@rneui/themed'

export default function PickerItem ({ item, handleSelect, isSelected }) {
  const { theme } = useTheme()
  return (
    <TouchableOpacity style={styles.container} onPress={() => handleSelect(item)}>
      <Text style={styles.text(theme.colors.primary, isSelected)}>
       {item}
      </Text>
      <View
        style={styles.circle(
          theme.colors.primary,
          theme.colors.secondary,
          isSelected
        )}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 18
  },
  circle: (primaryColor, secondaryColor, isSelected) => ({
    backgroundColor: isSelected ? primaryColor : 'transparent',
    width: 25,
    height: 25,
    borderRadius: 6.5,
    borderWidth: 1,
    borderColor: isSelected ? primaryColor : secondaryColor
  }),
  text: (primaryColor, isSelected) => ({
    color: isSelected ? primaryColor : '#333',
    fontSize: 17,
    fontWeight: '400'
  })
})
