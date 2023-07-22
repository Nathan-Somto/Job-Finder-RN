/* eslint-disable camelcase */
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'
import DetailsHeader from '@components/DetailsHeader'
import DetailsTabs from '@components/DetailsTabs'
import DetailsTabContent from '@components/DetailsTabContent'
import DetailsFooter from '@components/DetailsFooter'
import jobData from '@data/data.json'
import { useTheme } from '@rneui/themed'

export default function Details ({ route }) {
  const [jobDetails, setJobDetails] = React.useState(null)
  const [index, setIndex] = React.useState(0)
  const { job_id } = route.params
  const { theme } = useTheme()
  React.useEffect(() => {
    setJobDetails(...jobData.data.filter((item) => item.job_id === job_id))
  }, [job_id])
  return (
    <View style={styles.container}>
      {jobDetails
        ? (
        <>
          <DetailsHeader item={jobDetails} />
          <DetailsTabs active={index} setActive={setIndex} />
          <DetailsTabContent
            active={index}
            setActive={setIndex}
            content={jobDetails}
          />
          <DetailsFooter item={jobDetails} />
        </>
          )
        : (
        <ActivityIndicator color={theme.colors.primary} size={'small'} />
          )}
    </View>
  )
}

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: '#fff'
  }
})
