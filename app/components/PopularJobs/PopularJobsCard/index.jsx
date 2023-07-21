/* eslint-disable react/prop-types */
import { useTheme, Image, Text } from '@rneui/themed'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import React from 'react'
export default function PopularJobsCard ({ item, handleCardPress, selected }) {
  const { theme } = useTheme()
  return (
    <TouchableOpacity onPress={() => handleCardPress(item.job_id)}>
      <View
        style={cardStyles.container(
          selected === item.job_id,
          theme.colors.primary
        )}
      >
        <View style={cardStyles.topContainer}>
          <View>
            <Image
              source={{ uri: item?.employer_logo }}
              style={cardStyles.image}
            />
            <Text
              style={[
                cardStyles.subTitle(selected === item.job_id),
                { marginTop: 8, textAlign: 'center' }
              ]}
            >
              {item.employer_name}
            </Text>
          </View>
          <View style={{ alignSelf: 'flex-start' }}>
            <Entypo
              name="heart-outlined"
              color={selected === item.job_id ? '#fff' : '#808080'}
              size={20}
            />
          </View>
        </View>
        <Text
          h2
          numberOfLines={1}
          style={cardStyles.title(selected === item.job_id)}
        >
          {item.job_title}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{ color: selected === item.job_id ? '#fff' : '#828282' }}
          >
            {item.job_publisher} -{' '}
          </Text>
          <Text style={[cardStyles.subTitle(selected === item.job_id)]}>
            {item.job_city}, {item.job_country}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
const cardStyles = StyleSheet.create({
  container: (selected, primaryColor) => ({
    height: 150,
    width: 250,
    borderRadius: 8,
    paddingHorizontal: 10,
    gap: 10,
    backgroundColor: selected ? primaryColor : '#fff',
    paddingVertical: 8
  }),
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  },
  title: (selected) => ({
    color: selected ? '#fff' : '#333',
    fontSize: 14,
    fontWeight: '600'
  }),
  subTitle: (selected) => ({
    color: selected ? '#fff' : '#828282',
    fontSize: 12,
    opacity: selected ? 0.8 : 1
  }),
  image: {
    height: 43,
    width: 43,
    borderRadius: 8
  }
})
