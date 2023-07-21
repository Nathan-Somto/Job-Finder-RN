import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'
import { Text, useTheme } from '@rneui/themed'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function JobFilters () {
  const { theme } = useTheme()
  const [selectedType, setSelectedType] = React.useState('All')
  const jobTypes = ['All', 'Full-Time', 'Contractor', 'Consulting', 'Part-Time']
  const navigation = useNavigation()
  function handleSelect (selectedItem) {
    if (typeof selectedItem !== 'string') return
    /*  setData((prevState) =>
      prevState.filter(
        (item) =>
          item.job_employment_type.toLowerCase() ===
          selectedItem.toLowerCase().replace('-', '')
      )
    ) */
    navigation.navigate('Search', {
      jobType: selectedItem
    })
    setSelectedType(selectedItem)
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={jobTypes}
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
