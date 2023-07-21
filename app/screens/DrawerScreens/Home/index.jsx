import { ActivityIndicator, View } from 'react-native'
import React from 'react'
import Search from '@components/Search'
import JobFilters from '@components/JobFilters'
import PopularJobs from '@components/PopularJobs'
import jobData from '@data/data.json'
import { useTheme, Text } from '@rneui/themed'
export default function Home () {
  const [data, setData] = React.useState([])
  const { theme } = useTheme()
  React.useEffect(() => {
    setData(jobData.data.slice(0, 9))
  }, [])
  return (
    <View style={{ backgroundColor: theme.colors.background }}>
      <View style={styles.welcomeContainer}>
        <Text style={{ color: '#828282' }}>Hello Nathan</Text>
        <Text
          h2
          h2Style={{ fontSize: 26 }}
          style={{ color: theme.colors.primary, fontWeight: '600' }}
        >
          Find your Perfect Job
        </Text>
      </View>
      <Search />
      <JobFilters />
      {data.length
        ? (
        <PopularJobs data={data} />
          )
        : (
        <ActivityIndicator color={theme.colors.primary} size={'small'} />
          )}
    </View>
  )
}

const styles = StyleSheet.create({
  welcomeContainer: {
    paddingHorizontal: 15,
    gap: 5,
    marginTop: 30
  }
})
