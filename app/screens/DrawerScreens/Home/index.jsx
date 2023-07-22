import { StyleSheet, ActivityIndicator, View } from 'react-native'
import React from 'react'
import Search from '@components/Search'
import JobFilters from '@components/JobFilters'
import PopularJobs from '@components/PopularJobs'
import jobData from '@data/data.json'
import { useTheme, Text } from '@rneui/themed'
import NearbyJobs from '@components/NearbyJobs'
export default function Home () {
  const [popularJobsData, setPopularJobsData] = React.useState([])
  const [nearbyJobsData, setNearbyJobsData] = React.useState([])
  const { theme } = useTheme()
  React.useEffect(() => {
    setPopularJobsData(jobData.data.slice(0, 9))
    setNearbyJobsData(jobData.data.slice(10, 19))
  }, [])
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background, overflow: 'scroll' }}>
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
      {popularJobsData.length
        ? (
        <PopularJobs data={popularJobsData} />
          )
        : (
        <ActivityIndicator color={theme.colors.primary} size={'small'} />
          )}
          {nearbyJobsData.length !== 0
            ? (
            <NearbyJobs data={nearbyJobsData} setData={setNearbyJobsData} />

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
