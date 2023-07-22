import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'
import { Image, useTheme, Text } from '@rneui/themed'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { TouchableOpacity } from 'react-native-gesture-handler'
import RightAction from './RightAction'
export default function JobsCard ({ item, selected, handleCardPress }) {
  /**
   * @todo store favorite in asyncstorage
   */
  // const swipeableRef = React.useRef(null)
  // const lastSwipeTime = React.useRef(null)
  const { theme } = useTheme()
  const [favourite, setFavourite] = React.useState(false)
  const renderRightActions = (_progress, dragX) => {
    return <RightAction dragX={dragX} />
  }

  return (
    <Swipeable
      renderRightActions={(progress, dragX) =>
        renderRightActions(progress, dragX)
      }
      onSwipeableClose={() => setFavourite(true)}
      friction={1}
    >
      <TouchableOpacity onPress={() => handleCardPress(item.job_id)}>
        <View
          style={styles.container(
            selected === item.job_id,
            theme.colors.primary
          )}
        >
          <View style={styles.leftContainer}>
            <Image source={{ uri: item?.employer_logo }} style={styles.image} />
            <View>
              <Text
                h2
                style={styles.title(selected === item.job_id)}
                numberOfLines={1}
              >
                {item.job_title}
              </Text>
              <Text style={styles.subtitle(selected === item.job_id)}>
                {item?.job_employment_type[0] +
                  item?.job_employment_type?.slice(1).toLowerCase()}
              </Text>
            </View>
          </View>
          <View style={{ alignSelf: 'flex-start', marginTop: 15 }}>
            <Entypo
              name="heart-outlined"
              color={
                favourite
                  ? '#FF4081'
                  : selected === item.job_id
                    ? '#fff'
                    : '#808080'
              }
              size={20}
            />
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: (isSelected, primaryColor) => ({
    backgroundColor: isSelected ? primaryColor : '#fff',
    borderRadius: 12,
    paddingVertical: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
    height: 75,
    paddingHorizontal: 10
  }),
  title: (isSelected) => ({
    color: isSelected ? '#fff' : '#333',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8
  }),
  subtitle: (isSelected) => ({
    opacity: 0.8,
    color: isSelected ? '#fff' : '#333',
    fontSize: 11
  }),
  image: {
    height: 43,
    width: 43,
    borderRadius: 8
  },
  leftContainer: {
    flexDirection: 'row',
    gap: 30,
    alignItems: 'center'
  }
})
