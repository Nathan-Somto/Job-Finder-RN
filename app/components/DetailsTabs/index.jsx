import { StyleSheet } from 'react-native'
import React from 'react'
import { Tab, useTheme } from '@rneui/themed'
export default function DetailsTabs ({ active, setActive }) {
  const { theme } = useTheme()
  const details = ['About', 'Qualifications', 'Respondsibilities']
  return (
    <Tab
      onChange={(index) => setActive(index)}
      disableIndicator
      value={active}
      scrollable
      style={{ paddingHorizontal: 5 }}
    >
      {details.map((detail, index) => (
        <Tab.Item
          title={detail}
          style={styles.tab(index === active, theme.colors.primary)}
          key={index}
          titleStyle={styles.tabText(active === index)}
        />
      ))}
    </Tab>
  )
}

const styles = StyleSheet.create({
  tabText: (isActive, primaryColor) => ({
    color: !isActive ? primaryColor : '#fff',
    fontSize: 12
  }),
  tab: (isActive, primaryColor) => ({
    paddingHorizontal: 2,
    borderRadius: 8,
    backgroundColor: isActive ? primaryColor : '#E0E0E0',
    height: 45,
    marginLeft: 6
  })
})
