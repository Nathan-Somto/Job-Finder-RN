import {
  Keyboard,
  View,
  KeyboardAvoidingView,
  Pressable,
  Platform,
  Alert,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native'
import React from 'react'
import InputGroup from '@components/InputGroup'
import { Button, Avatar, useTheme, Text } from '@rneui/themed'
import * as ImagePicker from 'expo-image-picker'
// eslint-disable-next-line no-unused-vars
import { NavigationProp, RouteProp } from '@react-navigation/native'
import { EvilIcons } from '@expo/vector-icons'

/**
 *
 * @param {{navigation: NavigationProp, route: RouteProp}} props
 * @param {NavigationProp} props.navigation
 * @param {RouteProp} props.route
 * @returns
 */
export default function EditProfile (props) {
  const [Name, setName] = React.useState('Nathan Somto')
  const [Email, setEmail] = React.useState('mkparusomtochi26@gmail.com')
  const [Bio, setBio] = React.useState(
    'i love coding and playing games and also playing sports'
  )
  const [imgUrl, setImgUrl] = React.useState(
    'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=60'
  )
  function handleSubmit () {
    const data = {
      Name,
      Email,
      Bio,
      imgUrl
    }
    console.log('data >>', data)
    Alert.alert('Saved Profile', 'Successfully saved the data to the db.')
  }
  async function pickImage () {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })
    if (!result.canceled) {
      setImgUrl(result.assets[0].uri)
    }
  }
  const { theme } = useTheme()
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.avatar}>
            <Avatar
              size={'xlarge'}
              containerStyle={{ height: 100, width: 100 }}
              rounded
              source={{ uri: imgUrl }}
            />
            <Pressable
              onPress={pickImage}
              style={[
                styles.avatarBtn,
                { backgroundColor: theme.colors.primary }
              ]}
            >
              <EvilIcons name="pencil" size={23} color="white" />
            </Pressable>
          </View>
          <Text h2 h2Style={styles.name}>
            {Name.length ? Name : 'No Name'}
          </Text>
          <Text style={styles.screenName}>
            {props.route.name === 'EditProfile'
              ? 'Edit Profile'
              : 'Setup Profile'}
          </Text>
          <View style={styles.form}
      >
            <InputGroup label={'Name'} value={Name} onChangeText={setName} />
            <InputGroup label={'Email'} value={Email} onChangeText={setEmail} />
            <InputGroup
              label={'Bio'}
              multiline
              value={Bio}
              onChangeText={setBio}
            />
          </View>
          <Button
            title="Save now"
            buttonStyle={{ height: 54, flex: 1 }}
            onPress={handleSubmit}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    marginVertical: 35
  },
  avatar: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    alignSelf: 'center',
    marginBottom: 15
  },
  avatarBtn: {
    position: 'absolute',
    bottom: -5,
    right: 0,
    left: 67,
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },
  name: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  },
  screenName: {
    opacity: 0.5,
    textAlign: 'center',
    fontSize: 17.5,
    marginTop: 8
  },
  form: {
    marginTop: 20,
    marginBottom: 10
  }
})
