import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'
import { Text, useTheme } from '@rneui/themed'
import React from 'react'

export default function TabFilters ({ filterInfo, onPress }) {
  const { theme } = useTheme()
  const [selectedType, setSelectedType] = React.useState(filterInfo[0])
  function handleSelect (selectedItem) {
    onPress(selectedItem)
    setSelectedType(selectedItem)
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={filterInfo}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.tab(
              item === selectedType,
              theme.colors.primary,
              theme.colors.white
            )}
            onPress={() => handleSelect(item)}
          >
            <Text style={styles.tabText(item === selectedType)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 18,
    marginBottom: 30,
    paddingHorizontal: 15
  },
  tab: (isSelected, primaryColor) => ({
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: isSelected ? primaryColor : '#E0E0E0'
  }),
  tabText: (isSelected) => ({
    fontSize: 13,
    fontWeight: '400',
    color: isSelected ? '#fff' : '#828282'
  })
})
