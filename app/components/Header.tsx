import React from 'react'
import { Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { appColors, width, totalSize, height } from '../../src'
import Icon from 'react-native-vector-icons/Ionicons'

interface headerTypes {
  heading?: string
  onBackPress?(): void
  isenableMenu?: boolean
  onNotificationPress?(): void
  isEnableNotification?: boolean
}

export const Header = (props: headerTypes) => {
  const {
    heading,
    onBackPress,
    isenableMenu = false,
    onNotificationPress,
    isEnableNotification = false,
  } = props
  return (
    <View style={container}>
      <TouchableOpacity style={iconContainer} onPress={onBackPress}>
        <Icon
          size={totalSize(3.0)}
          name={isenableMenu ? 'menu' : 'arrow-back-outline'}
          color={'white'}
        />
      </TouchableOpacity>
      <View style={FLEX}>
        <Text
          numberOfLines={2}
          style={{
            fontSize: totalSize(2.5),
            color: appColors.headingTextColor,
            fontWeight: 800,
          }}
        >
          {heading}
        </Text>
      </View>
      {isEnableNotification && (
        <TouchableOpacity
          style={{
            width: width(10),
            height: height(10),
            borderRadius: width(4),
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={onNotificationPress}
        >
          <Icon size={totalSize(3.2)} name={'notifications-sharp'} color={'white'} />
        </TouchableOpacity>
      )}
    </View>
  )
}

const FLEX: ViewStyle = {
  width: '80%',
  alignItems: 'center',
  justifyContent: 'center',
}

const iconContainer: ViewStyle = {
  width: width(9),
  height: width(9),
  borderRadius: width(9),
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: appColors.headerIconPrimaryBackgroundColor,
}

const container: ViewStyle = {
  height: height(7.5),
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 10,
}
