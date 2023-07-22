import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import { useTheme } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
import PopularJobsCard from './PopularJobsCard'
import SectionHeader from '@components/SectionHeader'

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
     <SectionHeader sectionName='Popular Jobs'/>
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
  }
})
