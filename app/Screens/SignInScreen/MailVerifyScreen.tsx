import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { LoginNavigatorParamList, NativeStackScreenProps } from '../../navigators'
import { appColors, totalSize, validateOTP, width } from '../../../src'
import { Button, Header, Input } from '../../components'

export const MailVerifyScreen: React.FunctionComponent<
  NativeStackScreenProps<LoginNavigatorParamList, 'mailVerifyScreen'>
> = props => {
  const [emailIdValue, setEmailidValue] = useState('')
  const [mockEmail, setMockEmail] = useState('')
  const [nextStep, setNextStep] = useState(false)
  const [otp, setOTP] = useState('')

  useEffect(() => {
    if (props?.route?.params) {
      const { email } = props?.route?.params
      setEmailidValue(email || '')
      mackEmail(email)
    }
  }, [props?.route?.params])

  function mackEmail(email: string) {
    const array = email.split('@')
    const subArray = array[0]
    const mackstring = `${subArray[0]}${subArray[1]}***${array[1]}`
    setMockEmail(mackstring)
  }

  return (
    <SafeAreaView style={[FULL, { backgroundColor: appColors.primaryBackgroundColor }]}>
      <Header heading='Forget Password' />
      <View style={{ flex: 1, marginHorizontal: 30 }}>
        {nextStep ? (
          <>
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
            <Text
              style={{
                fontSize: totalSize(2.1),
                alignSelf: 'center',
                color: 'rgba(255,255,255,0.8)',
                marginBottom: 20,
                justifyContent: 'center',
              }}
            >
              {`An authertication code has been sent to ${mockEmail} enter any 4 digits code`}
            </Text>
            <Input
              placeholderName='OTP'
              onChangeText={value => setOTP(value)}
              value={otp}
              inputType='number'
              maxLimit={4}
            />
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: totalSize(2.1),
                  alignSelf: 'center',
                  letterSpacing: width(0.011),
                  color: appColors.buttonPrimaryTextColor,
                }}
              >
                {"I didn't receive code."}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  if (validateOTP(otp)) {
                    setOTP('')
                    props.navigation.navigate('signUp')
                  }
                }}
              >
                <Text
                  style={[
                    {
                      fontSize: totalSize(2.1),
                      alignSelf: 'center',
                      paddingHorizontal: width(1.2),
                      letterSpacing: width(0.011),
                      color: 'yellow',
                    },
                  ]}
                >
                  Resend Code
                </Text>
              </TouchableOpacity>
            </View>

            <Text
              style={{
                fontSize: totalSize(1.8),
                alignSelf: 'center',
                color: 'blue',
                marginBottom: 50,
                marginTop: 20,
              }}
            >
              {"I didn't receive code."}
            </Text>
            <Button
              text='Verify Now'
              onClick={() => {
                if (validateOTP(otp)) {
                  setOTP('')
                  props.navigation.navigate('createPassword', {
                    data: { email: emailIdValue, firstName: '', lastname: '' },
                  })
                }
              }}
            />
          </>
        ) : (
          <>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 30,
              }}
            >
              <Image
                source={require('../../assets/images/email1.png')}
                style={{ width: 200, height: 200, borderRadius: width(30) }}
              />
            </View>
            <Text
              style={{
                fontSize: totalSize(2.1),
                alignSelf: 'center',
                color: 'rgba(255,255,255,0.8)',
                paddingBottom: 20,
              }}
            >
              We will send a mail to the email address you Register to reagin your password
            </Text>
            <Input
              placeholderName='Email'
              onChangeText={value => setEmailidValue(value)}
              value={emailIdValue}
              inputType='email'
            />
            <Text
              style={{
                fontSize: totalSize(2.1),
                alignSelf: 'center',
                color: 'orange',
                paddingBottom: 20,
              }}
            >
              {`Email sent ${mockEmail}`}
            </Text>
            <Button
              text='send'
              onClick={() => {
                setNextStep(true)
              }}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  )
}

const FULL: ViewStyle = { flex: 1 }
