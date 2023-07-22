import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text, useTheme } from '@rneui/themed'

export default function DetailsAbout ({ aboutContent }) {
  const { theme } = useTheme()
  return (
    <View style={styles.container}>
      <View>
        <Text
          h2
          style={{
            color: theme.colors.primary,
            fontSize: 22,
            fontWeight: '600'
          }}
        >
          About the Job :{' '}
        </Text>
      </View>
      <View style={{ marginVertical: 15 }}>
        <Text style={{ color: theme.colors.secondary, fontSize: 14 }}>
          {aboutContent}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    marginVertical: 15
  }
})
