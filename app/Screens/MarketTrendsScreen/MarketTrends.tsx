import {
	Image,
	SafeAreaView,
	ScrollView,
	Text,
	View,
	ViewStyle,
} from 'react-native';
import {
	LoginNavigatorParamList,
	NativeStackScreenProps,
} from '../../navigators';
import { appColors, CustomeImage, totalSize, width } from '../../../src';
import { Header, Input, MarketingCard } from '../../components';
import React, { useState } from 'react';

export const MarketTrends: React.FunctionComponent<
	NativeStackScreenProps<LoginNavigatorParamList, 'marketTrends'>
> = () => {
	const [searchData, setSearchdata] = useState('');

	return (
		<SafeAreaView
			style={{ flex: 1, backgroundColor: appColors.primaryBackgroundColor }}
		>
			<Header heading="Market trends" />
			<View style={{ flex: 1, marginHorizontal: 15 }}>
				<Input
					placeholderName="Search curency..."
					onChangeText={value => setSearchdata(value)}
					value={searchData}
					inputType="custom"
					isEnableSearchicon={true}
				/>
				<ScrollView>
					<View style={{ paddingBottom: 20 }}>
						<MarketingCard
							title="Tron"
							subTitle="TRX"
							amount="12,64.80"
							percentage="-3.84"
							color="red"
							imagePath={require('../../assets/images/troncoin.png')}
						/>
						<MarketingCard
							title="Etherium"
							subTitle="BCH"
							amount="12,64.80"
							percentage="+3.84"
							color="green"
							imagePath={require('../../assets/images/ethcoin.png')}
						/>
						<MarketingCard
							title="Binance Coin"
							subTitle="CAD"
							amount="12,64.80"
							percentage="-5.84"
							color="red"
							imagePath={require('../../assets/images/binancecoin.png')}
						/>
						<MarketingCard
							title="Pound"
							subTitle="GBP"
							amount="12,64.80"
							percentage="-1.84"
							color="red"
							imagePath={require('../../assets/images/pound.png')}
						/>
						<MarketingCard
							title="Tether"
							subTitle="USDT"
							amount="12,64.80"
							percentage="+2.84"
							color="green"
							imagePath={require('../../assets/images/tether.png')}
						/>
						<MarketingCard
							title="Bitcoin Cash"
							subTitle="BCH"
							amount="12,64.80"
							percentage="-1.84"
							color="red"
							imagePath={require('../../assets/images/bitcoin.png')}
						/>
					</View>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};
