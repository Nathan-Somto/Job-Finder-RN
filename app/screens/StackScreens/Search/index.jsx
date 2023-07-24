import { View, TouchableOpacity, FlatList, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'
import SearchBar from '@components/Search'
import jobData from '@data/data.json'
import { Text, useTheme } from '@rneui/themed'
import TabFilters from '@components/TabFilters'
import JobsCard from '@components/JobsCard'
import { Entypo } from '@expo/vector-icons'
const itemsPerPage = 5
export default function Search ({ navigation, route }) {
  const [filteredData, setFilteredData] = React.useState([])
  const [currPage, setCurrPage] = React.useState(1)
  const [selected, setSelected] = React.useState(-1)
  const { theme } = useTheme()
  const searchParam = route.params?.searchParam ?? ''
  const jobType = route.params?.jobType ?? ''
  // effect that is used to get our data
  React.useEffect(() => {
    if (searchParam) {
      setFilteredData(
        jobData.data.filter((item) => (
          item.job_title.toLowerCase().includes(searchParam.toLowerCase())
        )
        )
      )
    } else {
      if (jobType.toLowerCase() !== 'all') {
        setFilteredData(
          jobData.data.filter((item) => item.job_employment_type === jobType)
        )
      } else {
        setFilteredData(jobData.data)
      }
    }
  }, [searchParam, jobType])
  // formulars for calculating the pagination start and end.
  const totalItems = filteredData.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (currPage - 1) * itemsPerPage
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems)

  // Get the data to be rendered on the current page
  const currData = filteredData.slice(startIndex, endIndex)
  const searchFilters = ['Highest Rated', 'Most Recent']
  // function used for sorting / ordering the data.
  const orderData = React.useCallback((selectedItem) => {
    const copiedData = filteredData.slice()
    if (selectedItem === 'Most Recent') {
      copiedData.sort(
        (a, b) => a?.job_posted_at_timestamp - b?.job_posted_at_timestamp
      )
    } else {
      copiedData.sort(
        (a, b) => a?.job_apply_quality_score - b?.job_apply_quality_score
      )
    }
    setFilteredData(copiedData)
  }, [searchParam, jobType, filteredData])
  // buttons used for handling pagination.
  function handlePaginateNext () {
    setCurrPage((prevState) => Math.min(prevState + 1, totalPages))
  }
  function handlePaginatePrev () {
    setCurrPage((prevState) => Math.max(prevState - 1, 1))
  }
  function handleCardPress (id) {
    setSelected(id)
    navigation.navigate('Details', {
      job_id: id
    })
  }
  const MemoJobsCard = React.memo(JobsCard)
  return (
    <View style={{ flex: 1 }}>
      <SearchBar />
      <Text style={{ color: theme.colors.primary, fontWeight: '500', fontSize: 19, marginTop: 15, paddingHorizontal: 20 }}>
        {totalItems} Job {totalItems <= 1 ? 'Opportunity' : 'Opportunities'}
      </Text>
      {/* Job Tabs */}
      <TabFilters filterInfo={searchFilters} onPress={orderData} />
      {
        totalItems !== 0
          ? (
          <FlatList
        data={currData}
        renderItem={({ item }) => (
          <MemoJobsCard
            item={item}
            selected={selected}
            handleCardPress={handleCardPress}
          />
        )}
        keyExtractor={(item, id) => item.job_id + id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ rowGap: theme.spacing.lg, paddingBottom: 30, marginTop: 5, paddingHorizontal: 15 }}
        pagingEnabled
      />
            )
          : (
              <ActivityIndicator color={theme.colors.primary} size={'small'} />
            )
      }
      <View style={styles.paginationContainer}>
        <TouchableOpacity
          style={styles.paginationButton(theme.colors.primary, currPage === 1)}
          onPress={handlePaginatePrev}
          disabled={currPage === 1}
        >
          <Entypo name="chevron-left" size={15} color="#fff" />
        </TouchableOpacity>
        <View style={styles.paginationTextBox}>
        <Text style={{ color: theme.colors.primary }}>
          {totalPages ? currPage : 0} of {totalPages}
        </Text>
        </View>
        <TouchableOpacity
          style={styles.paginationButton(theme.colors.primary, currPage === totalPages)}
          onPress={handlePaginateNext}
          disabled={currPage === totalPages}
        >
          <Entypo name="chevron-right" size={15} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  paginationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10
  },
  paginationButton: (backgroundColor, isDisabled) => ({
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor,
    opacity: isDisabled ? 0.5 : 1
  }),
  paginationTextBox: {
    width: 60,
    height: 30,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    textAlign: 'center',
    padding: 4
  }
})
