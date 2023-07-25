import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Picker from '@components/Picker'
import { categories, subCategories, locations } from './data'
import { Button, Text, Slider, useTheme } from '@rneui/themed'
import { FontAwesome } from '@expo/vector-icons'
import TabButton from '@components/TabButton'

export default function Filters ({ navigation }) {
  const [currCategory, setCurrCategory] = React.useState(categories[0])
  const [sliderValue, setSliderValue] = React.useState(10000)
  function handleChange (e) {
    setCurrCategory(e.Category)
  }
  const { theme } = useTheme()
  const tabData = ['Part time', 'Full time', 'Freelance', 'Contract', 'Remote']
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text h2 h2Style={styles.filtersHeading(theme.colors.primary)}>
          {' '}
          Set Filters{' '}
        </Text>
        <View>
          <Picker
            icon={'briefcase'}
            label={'Category'}
            pickerItems={categories}
            onChange={handleChange}
          />
          <Picker
            icon={'briefcase'}
            label={'Sub Category'}
            pickerItems={subCategories[currCategory]}
          />
          <Picker
            icon={'location'}
            label={'Location'}
            pickerItems={locations}
          />
          <View>
            <View style={styles.textContainer}>
              <Text>Min Salary</Text>
              <Text>Max Salary</Text>
            </View>
            <View>
              <Slider
                value={sliderValue}
                onValueChange={setSliderValue}
                maximumValue={2500000}
                minimumValue={10000}
                step={1}
                orientation="horizontal"
                trackStyle={{ height: 5, backgroundColor: 'transparent' }}
                thumbStyle={{
                  height: 30,
                  width: 30,
                  backgroundColor: '#333',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                thumbProps={{
                  children: <FontAwesome name="money" size={15} color="#fff" />
                }}
              />
              <View style={[styles.textContainer, { marginBottom: 20 }]}>
                <Text>$10,000</Text>
                <Text>$2,500,000</Text>
              </View>
            </View>
          </View>
          <Text style={{ color: theme.colors.primary, fontWeight: '600' }}>
            Job Type
          </Text>
          <View
            style={styles.tabButtonContainer}
          >
            {tabData.map((item, index) => (
              <TabButton text={item} key={item + index} />
            ))}
          </View>
        </View>
        <Button
          title="Apply Filters"
          buttonStyle={{ width: '100%', height: 54 }}
          onPress={() => navigation.goBack()}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    paddingHorizontal: 15,
    flex: 1,
    marginTop: 50,
    marginBottom: 10
  },
  filtersHeading: (color) => ({
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 25,
    color,
    fontWeight: 'bold'
  }),
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizonal: 8,
    opacity: 0.8,
    marginBottom: 15,
    marginTop: 12
  },
  tabButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 15,
    marginBottom: 30,
    marginTop: 15
  }
})
