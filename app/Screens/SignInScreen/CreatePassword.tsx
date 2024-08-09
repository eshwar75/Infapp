import React from 'react'
import { Image, Text, View, ViewStyle } from 'react-native'
import { Button, Header, Input } from '../../components'
import { appColors, totalSize, validatePassword, width } from '../../../src'
import { LoginNavigatorParamList, NativeStackScreenProps } from '../../navigators'

export const CreatePassword: React.FunctionComponent<
  NativeStackScreenProps<LoginNavigatorParamList, 'createPassword'>
> = props => {
  const [password, setPassword] = React.useState('')
  const [al, setAl] = React.useState(false)
  const [passwordLength, setPasswordLength] = React.useState(false)
  const [number, setNumber] = React.useState(false)

  function checkSpecial(password: string) {
    if (password.length === 0) {
      setAl(false)
      setNumber(false)
      setPasswordLength(false)
    } else if (password.length > 7) {
      setPasswordLength(true)
    } else if (password.match(/[0-9]/g)) {
      setNumber(true)
    } else {
      setAl(true)
    }
  }

  return (
    <View style={[FULL, { backgroundColor: appColors.primaryBackgroundColor }]}>
      <Header heading='Create Password' />
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
          <Text
            style={{
              fontSize: totalSize(2.1),
              alignSelf: 'center',
              color: 'rgba(255,255,255,0.8)',
              marginBottom: 20,
              justifyContent: 'center',
            }}
          >
            {'Choose a secure password that will be easy for you to remember'}
          </Text>
          <Input
            placeholderName='Password'
            inputType='password'
            onChangeText={value => {
              setPassword(value.trim())
              checkSpecial(value.trim())
            }}
            value={password}
            isEnablePasswordViewIcon={true}
          />
          <View style={{ marginVertical: 30 }}>
            <Text
              style={{
                fontSize: totalSize(1.6),
                color: passwordLength ? 'green' : 'rgba(255,255,255,0.8)',
                marginBottom: 15,
              }}
            >
              {'Has at least 8 characters'}
            </Text>
            <Text
              style={{
                fontSize: totalSize(1.6),
                color: al ? 'green' : 'rgba(255,255,255,0.8)',
                marginBottom: 15,
              }}
            >
              {'Has an uppercase letter or symbol'}
            </Text>
            <Text
              style={{
                fontSize: totalSize(1.6),
                color: number ? 'green' : 'rgba(255,255,255,0.8)',
                marginBottom: 10,
              }}
            >
              {'Has a number'}
            </Text>
          </View>
          <Button
            text='Continue'
            onClick={() => {
              if (validatePassword(password)) {
                setPassword('')
                setAl(false)
                setNumber(false)
                setPasswordLength(false)
                props.navigation.navigate('homeScreen')
              }
            }}
          />
        </View>
      </View>
    </View>
  )
}

const FULL: ViewStyle = { flex: 1 }
