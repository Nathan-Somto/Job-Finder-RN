import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
  FlatList
} from 'react-native'
import React from 'react'
import { Text, useTheme } from '@rneui/themed'
import PickerItem from './PickerItem'
import { Entypo, AntDesign } from '@expo/vector-icons'
/**
 *
 * @param {{label:string, icon:string, pickerItems: string[], onChange?:()=> void}}
 * label  the header of the picker component, used to generalize the picker component.
 * @param icon - the name of the icon you want to render, Entypo
 * @returns
 */
export default function Picker ({ label, icon, pickerItems, onChange }) {
  const [isVisible, setIsVisible] = React.useState(false)
  const [selectedItem, setSelectedItem] = React.useState(pickerItems[0] ?? '')
  function handleSelect (item) {
    setSelectedItem(item)
    if (onChange) {
      onChange({ [label]: item })
    }
  }
  const { theme } = useTheme()
  return (
    <View>
      {/* Dropdown label */}
      <View>
        <Text style={{ color: theme.colors.primary, fontWeight: '600' }}>
          {label}
        </Text>
      </View>
      {/* Dropdown button */}
      <TouchableWithoutFeedback onPress={() => setIsVisible(true)}>
        <View style={styles.inputContainer}>
          <View>
            <Entypo name={icon} color="#828282" size={18} />
          </View>
          <TextInput
            value={selectedItem}
            inputMode="text"
            caretHidden
            role="option"
            editable={false}
            style={{ flex: 1, marginLeft: 15 }}
          />
          <View>
            <Entypo name="chevron-down" color="#828282" size={18} />
          </View>
        </View>
      </TouchableWithoutFeedback>
      {/* Dropdown modal */}
      <Modal
        visible={isVisible}
        animationType="slide"
        style={{ height: '80%' }}
      >
        <View
          style={{ marginTop: 50, paddingHorizontal: 15, marginBottom: 30 }}
        >
          <TouchableOpacity
            style={{ alignSelf: 'flex-end' }}
            onPress={() => setIsVisible(false)}
          >
            <AntDesign name="close" color="#808080" size={20} />
          </TouchableOpacity>
          <Text h2 h2Style={{ fontSize: 25 }}>
            {label}
          </Text>
        </View>
        <FlatList
          data={pickerItems}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <PickerItem
              item={item}
              handleSelect={handleSelect}
              isSelected={item === selectedItem}
            />
          )}
        />
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#E0E0E0',
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderRadius: 16,
    marginBottom: 18,
    marginTop: 10
  }
})
