import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, SafeAreaView, View, ViewStyle } from 'react-native'
import { LoginNavigatorParamList, NativeStackScreenProps } from '../../navigators'
import { appColors, ValidateEmail } from '../../../src'
import { Button, Header, Input } from '../../components'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

export const SignUp: React.FunctionComponent<
  NativeStackScreenProps<LoginNavigatorParamList, 'signUp'>
> = props => {
  const [emailIdValue, setEmailidValue] = useState('')
  const [firstName, setfirstName] = useState('')
  const [lastname, setLastname] = useState('')
  const [errorMessage, seterrorMessage] = React.useState({
    emailMessage: '',
    firstName: '',
    lastName: '',
  })

  const validateDetails = () => {
    if (!ValidateEmail(emailIdValue)) {
      seterrorMessage({ ...errorMessage, emailMessage: 'enter a valid email address' })
    } else if (!firstName && firstName.length === 0) {
      seterrorMessage({ emailMessage: '', firstName: 'First name required', lastName: '' })
    } else if (firstName && firstName.length < 3) {
      seterrorMessage({
        emailMessage: '',
        firstName: 'Atleast three letters required',
        lastName: '',
      })
    } else if (!lastname && lastname.length === 0) {
      seterrorMessage({
        emailMessage: '',
        firstName: '',
        lastName: 'Atleast one letters required',
      })
    } else {
      props.navigation.navigate('mobileVerfiy', {
        createPasswordScreen: true,
        data: {
          email: emailIdValue,
          firstName,
          lastname,
        },
      })
      setEmailidValue('')
      setfirstName('')
      setLastname('')
      seterrorMessage({
        emailMessage: '',
        firstName: '',
        lastName: '',
      })
    }
  }

  return (
    <SafeAreaView style={[FULL, { backgroundColor: appColors.primaryBackgroundColor }]}>
      <Header heading='Create account' />
      <KeyboardAvoidingView style={FULL}>
        <View style={{ flex: 1, marginHorizontal: 30 }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 30,
            }}
          >
            <Image
              source={require('../../assets/images/lock1.png')}
              style={{ width: 200, height: 200 }}
            />
          </View>
          <Input
            placeholderName='Email'
            onChangeText={value => setEmailidValue(value)}
            value={emailIdValue}
            inputType='email'
            erroMessage={errorMessage.emailMessage}
            isEnableMailicon={true}
          />
          <Input
            placeholderName='First name'
            onChangeText={value => setfirstName(value.trim())}
            value={firstName}
            inputType='custom'
            erroMessage={errorMessage.firstName}
            IconTag={FontAwesome6}
            iconName='user-large'
          />
          <Input
            inputType='custom'
            placeholderName='Last name'
            onChangeText={value => setLastname(value.trim())}
            value={lastname}
            erroMessage={errorMessage.lastName}
            IconTag={FontAwesome6}
            iconName='user-large'
          />
          <View style={{ marginTop: 50 }}>
            <Button text='Register' onClick={() => validateDetails()} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const FULL: ViewStyle = { flex: 1 }
