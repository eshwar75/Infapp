import * as React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import type { ViewStyle } from 'react-native'
import { appColors, height, totalSize, width } from '../../src'

interface buttonProps {
  text: string
  disableTouchable?: boolean
  onClick?(): void
}

export const Button = (props: buttonProps) => {
  const { text, disableTouchable, onClick } = props

  const ViewDynamicStyle: ViewStyle = {
    opacity: disableTouchable ? 0.5 : 1,
  }

  return (
    <TouchableOpacity
      style={[
        ViewDynamicStyle,
        baseview,
        { backgroundColor: 'red', height: height(6) },
      ]}
      onPress={onClick}
      disabled={disableTouchable}
    >
      <View style={elementContainer}>
        <Text
          style={{
            fontWeight: 600,
            fontSize: totalSize(1.7),
            color: appColors.buttonPrimaryTextColor,
            alignItems: 'center',
          }}
          numberOfLines={1}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const elementContainer: ViewStyle = {
  justifyContent: 'center',
  paddingHorizontal: 1,
}

export const baseview: ViewStyle = {
  width: '100%',
  height: height(6),
  marginVertical: 1,
  paddingHorizontal: 1,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: width(9),
}
