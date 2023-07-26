import { View, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { Switch, ListItem, useThemeMode } from '@rneui/themed'

export default function Settings () {
  const notificationSettings = [
    { title: 'New Post', subtitle: 'if any new post update', value: false },
    {
      title: 'Got Hired',
      subtitle: 'if you got hired by any company',
      value: false
    },
    {
      title: 'Got Rejected',
      subtitle: 'is you got rejected by any company',
      value: false
    },
    { title: 'Call', subtitle: 'if you have a call', value: false },
    { title: 'Dark Mode', subtitle: 'enable dark mode', value: false }
  ]

  const [settings, setSettings] = React.useState(notificationSettings)
  const { setMode } = useThemeMode()
  const handleSwitchToggle = (index) => {
    const updatedSettings = [...settings]
    const currSetting = updatedSettings[index]
    if (currSetting.title === 'Dark Mode') {
      if (!currSetting.value) {
        setMode('dark')
      } else {
        setMode('light')
      }
    }
    currSetting.value = !currSetting.value
    setSettings(updatedSettings)
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={settings}
        keyExtractor={(item) => item.title}
        renderItem={({ item, index }) => (
          <ListItem containerStyle={styles.listItemContainer}>
            <ListItem.Content>
              <ListItem.Title style={styles.title}>{item.title}</ListItem.Title>
              <ListItem.Subtitle style={styles.subtitle}>
                {item.subtitle}
              </ListItem.Subtitle>
            </ListItem.Content>
            <Switch
              value={item.value}
              onValueChange={() => handleSwitchToggle(index)}
            />
          </ListItem>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50
  },
  listItemContainer: {
    backgroundColor: 'transparent'
  },
  title: {
    fontSize: 22,
    color: '#333',
    fontWeight: 'bold',
    fontFamily: 'Inter_600SemiBold',
    marginBottom: 6
  },
  subtitle: {
    opacity: 0.5,
    fontSize: 13.5,
    fontFamily: 'Inter_400Regular'
  }
})
