import { SafeAreaView, ScrollView, Text, View, ViewStyle } from 'react-native'
import {
  LoginNavigatorParamList,
  NativeStackScreenProps,
} from '../../navigators'
import { appColors, totalSize, width } from '../../../src'
import { Header, Input } from '../../components'
import React, { useState } from 'react'

export const Portfolio: React.FunctionComponent<
  NativeStackScreenProps<LoginNavigatorParamList, 'portfolio'>
> = () => {
  const [searchData, setSearchdata] = useState('')

  return (
    <SafeAreaView
      style={[FULL, { backgroundColor: appColors.primaryBackgroundColor }]}
    >
      <Header heading="Portfolio" />
      <View style={{ flex: 1, marginHorizontal: 15 }}>
        <Input
          placeholderName="Search curency..."
          onChangeText={(value) => setSearchdata(value)}
          value={searchData}
          inputType="custom"
        />
        <ScrollView>
          <Card
            title="Tron"
            subTitle="TRX"
            amount="12,64.80"
            percentage="-3.84"
            color="red"
          />
          <Card
            title="Etherium"
            subTitle="BCH"
            amount="12,64.80"
            percentage="+3.84"
            color="green"
          />
          <Card
            title="Binance Coin"
            subTitle="CAD"
            amount="12,64.80"
            percentage="-5.84"
            color="red"
          />
          <Card
            title="Pound"
            subTitle="GBP"
            amount="12,64.80"
            percentage="-1.84"
            color="red"
          />
          <Card
            title="Tether"
            subTitle="USDT"
            amount="12,64.80"
            percentage="+2.84"
            color="green"
          />
          <Card
            title="Bitcoin Cash"
            subTitle="BCH"
            amount="12,64.80"
            percentage="-1.84"
            color="red"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const Card = (props: {
  title: string
  subTitle: string
  amount: string
  percentage: string
  color: 'red' | 'green'
}) => {
  const { title, subTitle, amount, percentage, color } = props
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: '#444444',
        padding: 20,
        borderRadius: width(3),
        marginTop: 15,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            fontSize: totalSize(1.8),
            fontWeight: '600',
            color: '#ffffff',
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: totalSize(1.8),
            fontWeight: '600',
            color: '#ffffff',
          }}
        >
          {amount}
        </Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text
          style={{
            fontSize: totalSize(1.6),
            fontWeight: '400',
            color: '#CCCCCC',
          }}
        >
          {subTitle}
        </Text>
        <Text
          style={{
            fontSize: totalSize(1.8),
            fontWeight: '600',
            color: color || 'red',
          }}
        >
          {percentage}
        </Text>
      </View>
    </View>
  )
}

const FULL: ViewStyle = { flex: 1 }
