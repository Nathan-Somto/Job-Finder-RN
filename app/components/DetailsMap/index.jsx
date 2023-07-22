import { View } from 'react-native'
import React from 'react'
import { Text } from '@rneui/base'

export default function DetailsMap ({ lat, lng }) {
  return (
    <View>
      <Text h2 style={{ color: '#808080' }}>
        Lat: {lat} lng:{lng}
      </Text>
    </View>
  )
}

// const styles = StyleSheet.create({})
