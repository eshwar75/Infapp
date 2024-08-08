import * as React from 'react'
import { TextInput, View, ViewStyle, TextStyle, Text, TouchableOpacity } from 'react-native'
import type { TextInputProps } from 'react-native'
import { appColors, totalSize, width } from '../../src'
import Entypo from 'react-native-vector-icons/Entypo'

export interface InputProps extends TextInputProps {
  placeholderName: string
  disableFocus?: boolean
  onChangeText(text: string): void
  inputType: 'password' | 'email' | 'custom' | 'number'
  maxLimit?: number
  value?: string
  charactersRemainingText?: string
  isEnableMailicon?: boolean
  isEnablelockicon?: boolean
  isEnableSearchicon?: boolean
  label?: string
  erroMessage?: string
  IconTag?: any
  iconName?: string
  iconsColor?: string
  iconSize?: string
  isEnablePasswordViewIcon?: boolean
}

export const Input = (props: InputProps) => {
  const {
    placeholderName: placeholder,
    onChangeText,
    value,
    inputType,
    maxLimit,
    label,
    erroMessage,
    IconTag: IconTagProps,
    iconName,
    iconsColor,
    iconSize,
    isEnablePasswordViewIcon = false,
  } = props
  const length = React.useRef(value?.length)
  const [showPassword, setShowPassword] = React.useState(inputType === 'password' ? true : false)

  return (
    <View style={[{ marginVertical: 8 }]}>
      {label && (
        <Text
          style={{
            color: 'white',
            fontSize: totalSize(1.8),
            fontWeight: 500,
            paddingHorizontal: 12,
            marginBottom: 8,
          }}
          numberOfLines={1}
        >
          {label}
          This is label
        </Text>
      )}
      <View style={BASEVIEW}>
        <View style={flexRowDirection}>
          {IconTagProps && !isEnablePasswordViewIcon && (
            <View style={{ justifyContent: 'center', paddingLeft: 10 }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: width(10),
                  height: width(10),
                  borderRadius: width(10),
                }}
              >
                <IconTagProps
                  name={iconName || ''}
                  size={iconSize || totalSize(3.0)}
                  color={iconsColor || 'white'}
                />
              </View>
            </View>
          )}
          <TextInput
            style={[FULL, placeholderStyle, { color: appColors.headingTextColor }]}
            placeholder={placeholder}
            value={value}
            maxLength={maxLimit}
            // placeholderTextColor={appColors.headingTextColor}
            // placeholderTextColor="#505050"
            placeholderTextColor='#515860'
            secureTextEntry={inputType === 'password' ? true : false}
            autoCorrect={inputType === 'password' || inputType === 'email' ? false : true}
            autoCapitalize='none'
            keyboardType={
              inputType === 'email'
                ? 'email-address'
                : inputType === 'number'
                ? 'number-pad'
                : 'default'
            }
            {...props}
            onChangeText={text => {
              length.current = text.length
              onChangeText(text)
            }}
          />
          {inputType === 'password' && isEnablePasswordViewIcon && (
            <View style={{ justifyContent: 'center', paddingLeft: 10 }}>
              <TouchableOpacity
                activeOpacity={0.9}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: width(10),
                  height: width(10),
                  borderRadius: width(10),
                }}
                onPress={() => {
                  setShowPassword(!showPassword)
                }}
              >
                <Entypo
                  name={showPassword ? 'eye' : 'eye-with-line'}
                  size={totalSize(3)}
                  color={'white'}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
      {erroMessage && (
        <Text
          style={{
            color: 'red',
            fontSize: totalSize(1.6),
            fontWeight: 400,
            paddingHorizontal: 12,
            paddingTop: 5,
          }}
          numberOfLines={1}
        >
          {erroMessage}
        </Text>
      )}
    </View>
  )
}

const FULL: ViewStyle = { flex: 1 }

const BASEVIEW: ViewStyle = {
  backgroundColor: appColors.inputFieldPrimaryBackgroundColor,
  paddingVertical: 4,
  borderRadius: width(9),
}

const placeholderStyle: TextStyle = {
  fontSize: totalSize(2.2),
  paddingVertical: 10,
  paddingHorizontal: 15,
}

const flexRowDirection: ViewStyle = {
  flexDirection: 'row',
}
