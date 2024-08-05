import React from 'react';
import {
	SafeAreaView,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import {
	LoginNavigatorParamList,
	NativeStackScreenProps,
} from '../../navigators';
import { appColors, height, totalSize, width } from '../../../src';
import { Header } from '../../components';
import { MarketingCard } from '../../components';

export const Portfolio: React.FunctionComponent<
	NativeStackScreenProps<LoginNavigatorParamList, 'portfolio'>
> = () => {
	return (
		<SafeAreaView
			style={{ flex: 1, backgroundColor: appColors.primaryBackgroundColor }}
		>
			<Header heading="Portfolio" />
			<ScrollView style={{ flex: 1, marginHorizontal: 15 }}>
				<View
					style={{
						backgroundColor: '#191970',
						width: '100%',
						padding: 20,
						borderRadius: width(4),
						flexDirection: 'row',
					}}
				>
					<View>
						<View
							style={{
								backgroundColor: 'pink',
								width: width(30),
								height: height(4),
								borderRadius: width(8),
								alignItems: 'center',
								justifyContent: 'center',
								marginBottom: 10,
								marginLeft: 2,
							}}
						>
							<Text
								style={{
									fontSize: totalSize(1.6),
									fontWeight: 400,
									color: 'black',
								}}
							>
								BTC/USD
							</Text>
						</View>
						<Text
							style={{
								fontSize: totalSize(3.6),
								fontWeight: 600,
								color: '#FFFFFF',
								margin: 4,
								letterSpacing: width(0.3),
							}}
						>
							5,781.00
						</Text>
						<Text
							style={{
								fontSize: totalSize(1.4),
								fontWeight: 600,
								color: '#FFFFFF',
							}}
						>
							+ 248.23 (+0.35)
						</Text>
					</View>

					<View
						style={{
							flex: 1,
							justifyContent: 'flex-end',
							alignItems: 'flex-end',
						}}
					>
						<TouchableOpacity
							style={{
								backgroundColor: '#93C54B',
								width: width(30),
								height: height(5),
								borderRadius: width(8),
								alignItems: 'center',
								justifyContent: 'center',
								marginLeft: 2,
							}}
						>
							<Text
								style={{
									fontSize: totalSize(1.6),
									fontWeight: 400,
									color: 'black',
								}}
							>
								Add Balance
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						marginTop: 20,
					}}
				>
					<TouchableOpacity
						style={{
							backgroundColor: '#E07043',
							width: width(40),
							height: height(6),
							borderRadius: width(8),
							alignItems: 'center',
							justifyContent: 'center',
							marginLeft: 2,
						}}
					>
						<Text
							style={{
								fontSize: totalSize(1.8),
								fontWeight: 600,
								color: '#FFFFFF',
							}}
						>
							Hightest holdings
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							backgroundColor: '#A6AE42',
							width: width(40),
							height: height(6),
							borderRadius: width(8),
							alignItems: 'center',
							justifyContent: 'center',
							marginLeft: 2,
						}}
					>
						<Text
							style={{
								fontSize: totalSize(1.8),
								fontWeight: 600,
								color: '#FFFFFF',
							}}
						>
							24 Hours
						</Text>
					</TouchableOpacity>
				</View>
				<View style={{ paddingBottom: 20 }}>
					<MarketingCard
						title="Ripple"
						subTitle="2500 XRP (230.44)"
						amount="12,64.80"
						percentage="-3.84%"
						color="red"
						imagePath={require('../../assets/images/troncoin.png')}
					/>
					<MarketingCard
						title="Etherium"
						subTitle="24 ETH (190.19)"
						amount="12,64.80"
						percentage="+3.84%"
						color="green"
						imagePath={require('../../assets/images/ethcoin.png')}
					/>
					<MarketingCard
						title="Binance Coin"
						subTitle="2BCN (901.56)"
						amount="12,64.80"
						percentage="-5.84%"
						color="red"
						imagePath={require('../../assets/images/binancecoin.png')}
					/>
					<MarketingCard
						title="Pound"
						subTitle="44.000. GBP (230.44)"
						amount="12,64.80"
						percentage="-1.84%"
						color="red"
						imagePath={require('../../assets/images/pound.png')}
					/>
					<MarketingCard
						title="Tether"
						subTitle="2 USDT (901.56)"
						amount="12,64.80"
						percentage="+2.84%"
						color="green"
						imagePath={require('../../assets/images/tether.png')}
					/>
					<MarketingCard
						title="Bitcoin Cash"
						subTitle="0.1000000 BTC (840.64)"
						amount="12,64.80"
						percentage="-1.84%"
						color="red"
						imagePath={require('../../assets/images/ethcoin.png')}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};
