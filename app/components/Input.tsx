import * as React from 'react'
import { TextInput, View, ViewStyle, TextStyle, Text, TouchableOpacity } from 'react-native'
import type { TextInputProps } from 'react-native'
import { appColors, totalSize, width } from '../../src'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

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
  iconSize?: number
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
    isEnableMailicon = false,
    isEnablelockicon = false,
    isEnableSearchicon = false,
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
        </Text>
      )}
      <View style={BASEVIEW}>
        <View style={flexRowDirection}>
          {(isEnableMailicon || isEnablelockicon || isEnableSearchicon || IconTagProps) &&
            !isEnablePasswordViewIcon && (
              <View style={{ justifyContent: 'center', paddingHorizontal: 5 }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width(10),
                    height: width(10),
                    borderRadius: width(10),
                  }}
                >
                  {isEnableMailicon && (
                    <Ionicons
                      name={'mail'}
                      size={iconSize || totalSize(2.4)}
                      color={iconsColor || 'white'}
                    />
                  )}
                  {isEnableSearchicon && (
                    <FontAwesome5
                      name={'lock'}
                      size={iconSize || totalSize(2.4)}
                      color={iconsColor || 'white'}
                    />
                  )}
                  {isEnableMailicon && (
                    <FontAwesome5
                      name={'lock'}
                      size={iconSize || totalSize(2.4)}
                      color={iconsColor || 'white'}
                    />
                  )}
                  {IconTagProps && (
                    <IconTagProps
                      name={iconName || ''}
                      size={iconSize || totalSize(2.4)}
                      color={iconsColor || 'white'}
                    />
                  )}
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
            autoCorrect={inputType === 'password' || inputType === 'email' ? false : true}
            autoCapitalize='none'
            secureTextEntry={showPassword}
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
            <View style={{ justifyContent: 'center', paddingHorizontal: 5 }}>
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
  paddingHorizontal: 15,
}

const placeholderStyle: TextStyle = {
  fontSize: totalSize(2.2),
  paddingVertical: 10,
  paddingHorizontal: 15,
}

const flexRowDirection: ViewStyle = {
  flexDirection: 'row',
}
