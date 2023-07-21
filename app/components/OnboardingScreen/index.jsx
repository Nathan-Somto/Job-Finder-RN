/* eslint-disable react/prop-types */
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useTheme, Button, Text } from '@rneui/themed'
import React from 'react'
import { DeviceWidth } from '@utils/index'
export default function OnboardingScreen ({
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
    navigation.navigate('Drawer')
  }
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
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
      <View style={styles.paginateContainer}>
        {new Array(dataLength).fill(' ').map((_, index) => (
          <TouchableOpacity key={index}>
            <View style={styles.paginateBtn(currScreen === index)} />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.btnContainer}>
        {index !== 2
          ? (
          <>
            <Button
              type="outline"
              buttonStyle={styles.btn}
              onPress={() => handlePaginateClick(2)}
            >
              {' '}
              Skip{' '}
            </Button>
            <Button
              onPress={() => handlePaginateClick(index + 1)}
              buttonStyle={styles.btn}
            >
              {' '}
              Next{' '}
            </Button>
          </>
            )
          : (
          <Button
            onPress={() => handleNavigate()}
            buttonStyle={{ width: DeviceWidth() * 0.8, height: 54 }}
          >
            Get Started
          </Button>
            )}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: DeviceWidth()
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
    width: DeviceWidth() * 0.8,
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
