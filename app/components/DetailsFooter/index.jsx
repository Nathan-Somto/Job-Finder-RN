import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Button, useTheme } from '@rneui/themed'

import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
export default function DetailsFooter ({ item }) {
  const navigation = useNavigation()
  const { theme } = useTheme()
  function handleApplyPress () {
    navigation.navigate('Apply', {
      job_id: item.job_id
    })
  }
  return (
    <View style={styles.container}>
      <Button
        radius={'lg'}
        buttonStyle={{
          width: 54,
          height: 54,
          borderColor: theme.colors.primary,
          alignItems: 'center',
          justifyContent: 'center'
        }}
        type={'outline'}
      >
        <Entypo name="heart-outlined" size={24} color={theme.colors.primary} />
      </Button>
      <Button
        onPress={handleApplyPress}
        title={'Apply now'}
        type="solid"
        buttonStyle={{ backgroundColor: theme.colors.primary, height: 54 }}
        containerStyle={{ flex: 1 }}
        radius={'lg'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    gap: 25,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15
  }
})
