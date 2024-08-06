import React from 'react'
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import { Button, Header, Input } from '../../components'
import {
  appColors,
  height,
  totalSize,
  ValidateEmail,
  validatePassword,
  width,
} from '../../../src'
import {
  LoginNavigatorParamList,
  NativeStackScreenProps,
} from '../../navigators'

export const SignIn: React.FunctionComponent<
  NativeStackScreenProps<LoginNavigatorParamList, 'signIn'>
> = (props) => {
  const [emailid, setEmailid] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <View style={[FULL, { backgroundColor: appColors.primaryBackgroundColor }]}>
      <Header heading="Sign in" />
      <View style={{ flex: 1, marginHorizontal: 30 }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 30,
          }}
        >
          <Image
            source={require('../../assets/images/profile.png')}
            style={{ width: 200, height: 200, borderRadius: width(30) }}
          />
        </View>
        <View>
          <Input
            placeholderName="Email"
            inputType="email"
            onChangeText={(value) => setEmailid(value.trim())}
            value={emailid}
            isEnableMailicon={true}
          />
          <Input
            placeholderName="Password"
            inputType="password"
            onChangeText={(value) => setPassword(value.trim())}
            value={password}
            isEnablelockicon={true}
          />
          <View
            style={{ alignItems: 'flex-end', marginTop: 8, marginBottom: 12 }}
          >
            <TouchableOpacity
              onPress={() => {
                if (ValidateEmail(emailid)) {
                  props.navigation.navigate('forgotPassword', {
                    email: emailid,
                  })
                }
              }}
            >
              <Text
                style={[
                  {
                    fontSize: totalSize(2),
                    alignSelf: 'center',
                    letterSpacing: width(0.011),
                    color: 'yellow',
                  },
                ]}
              >
                Forget Password ?
              </Text>
            </TouchableOpacity>
          </View>
          <Button
            text="SignIn"
            onClick={() => {
              if (ValidateEmail(emailid) && validatePassword(password)) {
                props.navigation.navigate('mobileVerfiy')
              }
            }}
          />
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: height(20),
          }}
        >
          <Text
            style={{
              fontSize: totalSize(1.8),
              alignSelf: 'center',
              letterSpacing: width(0.011),
              color: appColors.buttonPrimaryTextColor,
            }}
          >
            Aleardy have not an account?
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('signUp')}>
            <Text
              style={[
                {
                  fontSize: totalSize(1.8),
                  alignSelf: 'center',
                  paddingHorizontal: width(1.2),
                  letterSpacing: width(0.011),
                  color: 'yellow',
                },
              ]}
            >
              Sign up!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const FULL: ViewStyle = { flex: 1 }
