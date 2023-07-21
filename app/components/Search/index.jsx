import { StyleSheet, View, TextInput, Platform } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Feather, SimpleLineIcons } from '@expo/vector-icons'
import { useTheme } from '@rneui/themed'
export default function Search () {
  const [search, setSearch] = React.useState('')
  const navigation = useNavigation()
  const { theme } = useTheme()
  function openFiltersScreen () {
    navigation.navigate('Filters')
  }
  function openSearchScreen () {
    navigation.navigate('Search', {
      searchParam: search
    })
  }
  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View style={styles.searchBar}>
        <TouchableOpacity onPress={openSearchScreen}>
          <Feather
            name="search"
            size={20}
            color={theme.colors.secondary}
            style={{ marginRight: 10, alignSelf: 'center' }}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Search for a Job"
          autoCorrect
          value={search}
          onChangeText={setSearch}
          placeholderTextColor={theme.colors.secondary}
          style={{ color: theme.colors.secondary, flex: 0.8 }}
        />
      </View>
      <TouchableOpacity
        onPress={openFiltersScreen}
        style={[
          styles.filterBtn,
          Platform.OS === 'ios'
            ? styles.boxShadowIOS(theme.colors.primary)
            : styles.boxShadowAndroid,
          { backgroundColor: theme.colors.primary }
        ]}
      >
        <SimpleLineIcons
          name="equalizer"
          size={24}
          color={theme.colors.white}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    gap: 20,
    marginTop: 25,
    width: '100%'
  },
  boxShadowIOS: (shadowColor) => ({
    shadowColor,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.2,
    shadowRadius: 15
  }),
  boxShadowAndroid: {
    elevation: 5
  },
  searchBar: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 14,
    borderRadius: 8,
    height: 45,
    flex: 1,
    alignItems: 'center'
  },
  filterBtn: {
    height: 43,
    width: 45,
    padding: 0.5,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end'
  }
})
