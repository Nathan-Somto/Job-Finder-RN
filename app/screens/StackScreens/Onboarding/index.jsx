/* eslint-disable react/prop-types */
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import onboardingData from './data'
import OnboardingScreen from '@components/OnboardingScreen'
import { DeviceWidth } from '@utils/index'

export default function Onboarding () {
  const [currScreen, setCurrScreen] = React.useState(0)
  const flatListRef = React.useRef(null)
  function handlePaginateClick (index) {
    if (flatListRef.current !== null) {
      flatListRef.current.scrollToOffset({
        offset: index * DeviceWidth(),
        animated: true
      })
    }
  }

  function handleScroll (e) {
    const contentX = e.nativeEvent.contentOffset.x
    const index = Math.round(contentX / DeviceWidth())
    setCurrScreen(index)
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={onboardingData}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        ref={flatListRef}
        renderItem={({ item, index }) => (
          <OnboardingScreen
            {...item}
            index={index}
            dataLength={onboardingData.length}
            handlePaginateClick={handlePaginateClick}
            currScreen={currScreen}
          />
        )}
        onMomentumScrollEnd={handleScroll}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
