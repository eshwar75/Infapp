import React, { useState } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { LoginNavigatorParamList, NativeStackScreenProps } from '../../navigators'
import { appColors, totalSize, validateMobileNumber, validateOTP, width } from '../../../src'
import { Button, Header, Input } from '../../components'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export const MobileVerfiy: React.FunctionComponent<
  NativeStackScreenProps<LoginNavigatorParamList, 'mobileVerfiy'>
> = props => {
  const [mobileNumber, setMobileNumber] = useState('')
  const [nextStep, setNextStep] = useState(false)
  const [otp, setOTP] = useState('')

  return (
    <SafeAreaView style={[FULL, { backgroundColor: appColors.primaryBackgroundColor }]}>
      <Header heading='Content details' />
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
              {`An authertication code has been sent to ${mobileNumber} enter any 4 digits code`}
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
                marginBottom: 20,
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
            <Button
              text='Verify Now'
              onClick={() => {
                if (validateOTP(otp)) {
                  if (props.route.params) {
                    const { data, createPasswordScreen } = props.route.params
                    if (createPasswordScreen) {
                      props.navigation.navigate('createPassword', { data })
                    } else {
                      setOTP('')
                      setMobileNumber('')
                      props.navigation.navigate('homeScreen')
                    }
                  } else {
                    setOTP('')
                    setMobileNumber('')
                    props.navigation.navigate('homeScreen')
                  }
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
              {'Simply enter any 10 digit number to login or create an accout'}
            </Text>
            <Input
              placeholderName='Mobile'
              onChangeText={value => setMobileNumber(value)}
              value={mobileNumber}
              inputType='number'
              maxLimit={10}
              IconTag={FontAwesome}
              iconName='phone'
            />

            <Text
              style={{
                fontSize: totalSize(2.1),
                alignSelf: 'center',
                color: 'rgba(255,255,255,0.8)',
                marginBottom: 50,
                marginTop: 20,
              }}
            >
              {'By using our mobile app, you agree to our term and condition'}
            </Text>

            <Button
              text='Continue'
              onClick={() => {
                if (validateMobileNumber(mobileNumber)) {
                  setNextStep(true)
                }
              }}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  )
}

const FULL: ViewStyle = { flex: 1 }
