import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Text } from '@rneui/themed'
export default function SectionHeader ({ sectionName }) {
  return (
    <View style={styles.btnContainer}>
      <Text h2 style={styles.h2Text}>
        {sectionName}
      </Text>
      <TouchableOpacity>
        <Text style={styles.linkBtn}>show all</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  h2Text: {
    color: '#333',
    fontWeight: '600'
  },
  linkBtn: {
    color: '#333',
    opacity: 0.8
  }
})
