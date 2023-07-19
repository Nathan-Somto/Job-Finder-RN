/* eslint-disable react/prop-types */
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import onboardingData from './data'
import { useNavigation } from '@react-navigation/native'
import { useTheme, Button, Text } from '@rneui/themed'
const DeviceWidth = Dimensions.get('window').width
export default function Onboarding () {
  const [currScreen, setCurrScreen] = React.useState(0)
  const flatListRef = React.useRef(null)
  function handlePaginateClick (index) {
    if (flatListRef.current !== null) {
      flatListRef.current.scrollToOffset({
        offset: index * DeviceWidth,
        animated: true
      })
    }
  }

  function handleScroll (e) {
    const contentX = e.nativeEvent.contentOffset.x
    const index = Math.round(contentX / DeviceWidth)
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
function OnboardingScreen ({
  title,
  description,
  image,
  index,
  handlePaginateClick,
  currScreen,
  dataLength
}) {
  const { theme } = useTheme()
  const navigation = useNavigation()
  function handleNavigate () {
    navigation.navigate('Home')
  }
  return (
    <View style={onBoardingScreenStyles.container}>
      <Image source={image} style={onBoardingScreenStyles.image} />
      <View style={{ justifyContent: 'center' }}>
        <Text
          h1
          style={{
            color: theme.colors.primary,
            marginBottom: 15,
            textAlign: 'center'
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            color: theme.colors.primary,
            opacity: 0.8,
            textAlign: 'center',
            fontSize: 15
          }}
        >
          {description}
        </Text>
      </View>
      <View style={onBoardingScreenStyles.paginateContainer}>
        {new Array(dataLength).fill(' ').map((_, index) => (
          <TouchableOpacity key={index}>
            <View
              style={onBoardingScreenStyles.paginateBtn(currScreen === index)}
            />
          </TouchableOpacity>
        ))}
      </View>
      <View style={onBoardingScreenStyles.btnContainer}>
        {index !== 2
          ? (
          <>
            <Button
              type="outline"
              buttonStyle={onBoardingScreenStyles.btn}
              onPress={() => handlePaginateClick(2)}
            >
              {' '}
              Skip{' '}
            </Button>
            <Button
              onPress={() => handlePaginateClick(index + 1)}
              buttonStyle={onBoardingScreenStyles.btn}
            >
              {' '}
              Next{' '}
            </Button>
          </>
            )
          : (
          <Button
            onPress={() => handleNavigate()}
            buttonStyle={{ width: DeviceWidth * 0.8, height: 54 }}
          >
            Get Started
          </Button>
            )}
      </View>
    </View>
  )
}
const onBoardingScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: DeviceWidth
  },
  image: {
    height: 220,
    width: 320,
    resizeMode: 'cover',
    marginBottom: 30
  },
  btnContainer: {
    position: 'absolute',
    flexDirection: 'row',
    width: DeviceWidth * 0.8,
    gap: 20,
    bottom: 70,
    justifyContent: 'center'
  },
  btn: {
    width: 150,
    height: 54
  },
  paginateContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    marginTop: 15
  },
  paginateBtn: (isScreen) => ({
    width: isScreen ? 12 : 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: isScreen ? '#3E4F88' : '#BDBDBD',
    opacity: isScreen ? 0.8 : 1
  })
})
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
