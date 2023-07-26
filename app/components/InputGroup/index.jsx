// eslint-disable-next-line no-unused-vars
import { StyleSheet, View, TextInput, TextInputProps } from 'react-native'
import React from 'react'
import { Text } from '@rneui/themed'
/**
 *
 * @param {TextInputProps & {label: string}} props - The props for the InputGroup component.
 * @param {string} props.label - The label for the input.
 * @param {...TextInputProps} props - All the props supported by the TextInput component.
 * @returns {JSX.Element} Returns the InputGroup component.
 *
 *
 */
export default function InputGroup ({ label, multiline, ...otherProps }) {
  return (
    <View style={[styles.container, multiline && { height: 150 }]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        {multiline
          ? (
          <View style={{ flex: 1 }}>
            <TextInput
              {...otherProps}
              style={{ padding: 8, color: '#333', opacity: 0.8 }}
              multiline
              textAlignVertical="top"
            />
          </View>
            )
          : (
          <TextInput
            {...otherProps}
            style={{ flex: 1, padding: 8, color: '#333', opacity: 0.8 }}
          />
            )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 75,
    marginBottom: 15
  },
  inputContainer: {
    padding: 2,
    flex: 1,
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 4
  },
  label: {
    color: '#333',
    opacity: 0.8,
    marginBottom: 10,
    fontSize: 16.5
  }
})
