/* eslint-disable react/prop-types */
import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import { Text, useTheme } from '@rneui/themed'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import PopularJobsCard from './PopularJobsCard'

export default function PopularJobs ({ data }) {
  const [selected, setSelected] = React.useState(-1)
  const navigation = useNavigation()
  const { theme } = useTheme()
  function handleCardPress (id) {
    setSelected(id)
    navigation.navigate('Details', {
      job_id: id
    })
  }
  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <Text h2 style={{ color: '#333', fontWeight: '600' }}>
          Popular Jobs
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: '#333',
              textDecorationLine: 'underline',
              opacity: 0.8
            }}
          >
            show all
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <PopularJobsCard
            item={item}
            handleCardPress={handleCardPress}
            selected={selected}
          />
        )}
        keyExtractor={(item) => item.job_id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: theme.spacing.lg }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  }
})
