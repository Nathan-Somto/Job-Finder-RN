import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useTheme, Text } from '@rneui/themed'

export default function DetailsSpecifics ({ specificTitle, specificContent }) {
  const { theme } = useTheme()
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text h2 style={styles.headerText(theme.colors.primary)}>
          {specificTitle} :{' '}
        </Text>
      </View>
      <View>
        {Array.isArray(specificContent)
          ? (
              specificContent.map((specific, index) => (
            <View key={index} style={styles.pointWrapper}>
              <View style={styles.pointDot(theme.colors.secondary)} />
              <Text style={styles.specificText(theme.colors.secondary)}>
                {specific}
              </Text>
            </View>
              ))
            )
          : (
          <Text style={styles.specificText(theme.colors.secondary)}>
            {specificContent}
          </Text>
            )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    marginVertical: 15,
    borderRadius: 8,
    width: '100%',
    marginTop: 15
  },
  headerContainer: {
    marginVertical: 8
  },
  headerText: (color) => ({
    color,
    fontWeight: '600',
    fontSize: 22,
    marginBottom: 12
  }),
  pointWrapper: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'flex-start',
    marginLeft: 10,
    marginBottom: 5,
    paddingHorizontal: 4
  },
  pointDot: (backgroundColor) => ({
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor,
    marginTop: 4
  }),
  specificText: (color) => ({
    color,
    fontSize: 12,
    fontWeight: '400',
    alignSelf: 'flex-start'
  })
})
