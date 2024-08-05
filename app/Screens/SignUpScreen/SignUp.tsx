import { Image, SafeAreaView, View, ViewStyle } from 'react-native'
import {
  LoginNavigatorParamList,
  NativeStackScreenProps,
} from '../../navigators'
import { appColors, ValidateEmail, validatePassword } from '../../../src'
import { Button, Header, Input } from '../../components'
import React, { useState } from 'react'

export const SignUp: React.FunctionComponent<
  NativeStackScreenProps<LoginNavigatorParamList, 'signUp'>
> = (props) => {
  const [emailIdValue, setEmailidValue] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <SafeAreaView
      style={[FULL, { backgroundColor: appColors.primaryBackgroundColor }]}
    >
      <Header heading="Create account" />
      <View
        style={{
          flex: 1,
          marginHorizontal: 30,
        }}
      >
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
          placeholderName="Email"
          onChangeText={(value) => setEmailidValue(value)}
          value={emailIdValue}
          inputType="email"
        />
        <Input
          placeholderName="Password"
          onChangeText={(value) => setPassword(value)}
          value={password}
          inputType="password"
        />
        <Input
          placeholderName="Confirm Password"
          onChangeText={(value) => setConfirmPassword(value)}
          value={confirmPassword}
          inputType="password"
        />
        <Button
          text="Register"
          onClick={() => {
            if (
              ValidateEmail(emailIdValue) &&
              validatePassword(password) &&
              validatePassword(confirmPassword) &&
              password === confirmPassword
            ) {
              props.navigation.navigate('mobileVerfiy')
            }
          }}
        />
      </View>
    </SafeAreaView>
  )
}

const FULL: ViewStyle = { flex: 1 }
