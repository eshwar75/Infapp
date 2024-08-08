import { Image, SafeAreaView, View, ViewStyle } from 'react-native'
import { LoginNavigatorParamList, NativeStackScreenProps } from '../../navigators'
import { appColors, ValidateEmail } from '../../../src'
import { Button, Header, Input } from '../../components'
import React, { useState } from 'react'

export const SignUp: React.FunctionComponent<
  NativeStackScreenProps<LoginNavigatorParamList, 'signUp'>
> = props => {
  const [emailIdValue, setEmailidValue] = useState('')
  const [firstName, setfirstName] = useState('')
  const [lastname, setLastname] = useState('')
  const [inputFieldErrormessage, setInputFieldErrormessage] = useState('')

  const validateDetails = () => {
    if (!ValidateEmail(emailIdValue)) {
      setInputFieldErrormessage('enter a valid email address')
      //   return
    } else if (!firstName && firstName.length === 0) {
      setInputFieldErrormessage('First name required')
      //   return
    } else if (firstName && firstName.length < 2) {
      setInputFieldErrormessage('Atleast three letters required')
      //   return
    } else if (!lastname && lastname.length === 0) {
      setInputFieldErrormessage('Atleast one letter required')
      //   return
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
      setInputFieldErrormessage('')
    }
  }

  return (
    <SafeAreaView style={[FULL, { backgroundColor: appColors.primaryBackgroundColor }]}>
      <Header heading='Create account' />
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
          isEnableMailicon={true}
          erroMessage={inputFieldErrormessage}
        />
        <Input
          placeholderName='First name'
          onChangeText={value => setfirstName(value.trim())}
          value={firstName}
          inputType='custom'
          isEnablelockicon={true}
          erroMessage={inputFieldErrormessage}
        />
        <Input
          inputType='custom'
          placeholderName='Last name'
          onChangeText={value => setLastname(value.trim())}
          value={lastname}
          isEnablelockicon={true}
          erroMessage={inputFieldErrormessage}
        />
        <View style={{ marginTop: 50 }}>
          <Button text='Register' onClick={() => validateDetails()} />
        </View>
      </View>
    </SafeAreaView>
  )
}

const FULL: ViewStyle = { flex: 1 }
