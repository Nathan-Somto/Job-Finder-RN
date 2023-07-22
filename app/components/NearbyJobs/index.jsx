import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import SectionHeader from '@components/SectionHeader'
import JobsCard from '@components/JobsCard'
import { useTheme } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'

export default function NearbyJobs ({ data, setData }) {
  const [selected, setSelected] = React.useState(-1)
  const navigation = useNavigation()
  const { theme } = useTheme()
  function handleCardPress (id) {
    setSelected(id)
    navigation.navigate('Details', {
      job_id: id
    })
  }
  const MemoJobsCard = React.memo(JobsCard)

  return (
    <View style={styles.container}>
      <SectionHeader sectionName={'Nearby Jobs'} />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <MemoJobsCard
            item={item}
            selected={selected}
            handleCardPress={handleCardPress}
          />
        )}
        keyExtractor={(item, id) => item.job_id + id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ rowGap: theme.spacing.lg, paddingBottom: 30 }}
        pagingEnabled
        initialNumToRender={5}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginTop: 25,
    flex: 1
  }
})
