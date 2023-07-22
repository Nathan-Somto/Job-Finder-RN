import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Image, Text, useTheme } from '@rneui/themed'
import { EvilIcons } from '@expo/vector-icons'
export default function DetailsHeader ({ item }) {
  const { theme } = useTheme()
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Image style={styles.image} source={{ uri: item.employer_logo }} />
        <Text h1 h1Style={styles.title}>
          {item.job_title}
        </Text>
      </View>
      <View style={styles.subtitleContainer}>
        <Text>{item.employer_name} - </Text>
        <View style={[styles.subtitleContainer, { marginTop: 0, gap: 0.5 }]}>
          <EvilIcons name="location" size={14} color="#808080" />
          <Text style={styles.subtitleInnerText(theme.colors.secondary)}>
            {item.job_city}, {item.job_country}
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.subtitleContainer,
          { justifyContent: 'center', gap: 25, width: '100%' }
        ]}
      >
        <View style={[styles.subtitleContainer, { marginTop: 0, gap: 5 }]}>
          <EvilIcons name="clock" size={16} color="#808080" />
          <Text style={styles.bottomText(theme.colors.secondary)}>
            {item.job_employment_type}
          </Text>
        </View>
        <View>
          <Text style={styles.bottomText(theme.colors.secondary)}>
            ${item.job_max_salary ?? 'N/A'} / Mo
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: 'center',
    paddingHorizontal: 15
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 10,
    marginBottom: 8
  },
  title: {
    color: '#333',
    textAlign: 'center',
    fontSize: 22
  },
  subtitleContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  subtitleInnerText: (color) => ({
    color,
    fontSize: 12
  }),
  bottomText: (color) => ({
    color,
    fontSize: 14
  })
})
