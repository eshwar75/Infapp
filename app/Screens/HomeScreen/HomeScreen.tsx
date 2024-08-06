import {
	FlatList,
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
import {
	appColors,
	CustomeImage,
	height,
	totalSize,
	width,
} from '../../../src';
import { Header } from '../../components';
import React from 'react';

export const HomeScreen: React.FunctionComponent<
	NativeStackScreenProps<LoginNavigatorParamList, 'homeScreen'>
> = props => {
	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: appColors.primaryBackgroundColor,
			}}
		>
			<Header
				isenableMenu={true}
				isEnableNotification={true}
				onNotificationPress={() => props.navigation.navigate('notification')}
			/>
			<ScrollView>
				<View style={{ flex: 1, marginHorizontal: 10 }}>
					<View
						style={{
							marginVertical: 20,
							paddingLeft: 10,
							marginHorizontal: 5,
						}}
					>
						<Text
							style={{
								fontSize: totalSize(2.8),
								color: 'blue',
								marginTop: 10,
								fontWeight: 500,
							}}
						>
							{'Hi Chandu'}
						</Text>
						<Text
							style={{
								fontSize: totalSize(3.2),
								color: appColors.headingTextColor,
								marginTop: 3,
								fontWeight: 700,
							}}
						>
							{'Good Morning'}
						</Text>
					</View>
					<FlatList
						horizontal
						data={[
							{
								id: '1',
								balance: '32,453.20',
								currency: 'USD',
								profitPercentage: '+15%',
								cardBackground: 'orange',
							},
							{
								id: '2',
								balance: '1580.00',
								currency: 'GBP',
								profitPercentage: '-7%',
								cardBackground: '#191970',
							},
						]}
						renderItem={item => <WalletBalance data={item.item} />}
						keyExtractor={item => item.id}
					/>
					<View>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-between',
								marginHorizontal: 5,
								marginTop: 10,
							}}
						>
							<Text
								style={{
									color: '#FFFFFF',
									fontWeight: 500,
									fontSize: totalSize(2.2),
								}}
							>
								Portfolio
							</Text>
							<TouchableOpacity
								onPress={() => {
									props.navigation.navigate('portfolio');
								}}
							>
								<Text
									style={{
										color: '#FFF0F2',
										fontWeight: 500,
										fontSize: totalSize(1.6),
									}}
								>
									View All
								</Text>
							</TouchableOpacity>
						</View>
						<FlatList
							horizontal
							data={[
								{
									id: '1',
									title: 'Ethereum',
									balance: '32,453.20',
									profitPercentage: '+15%',
									subTitle: 'TRX',
								},
								{
									id: '2',
									title: 'Bitcoin',
									balance: '1580.00',
									profitPercentage: '-0.39%',
									subTitle: 'BCH',
								},
								{
									id: '3',
									title: 'Pound',
									balance: '73,983.00',
									profitPercentage: '+15%',
									subTitle: 'GBP',
								},
								{
									id: '4',
									title: 'Tether',
									balance: '12,64.80',
									profitPercentage: '+15%',
									subTitle: 'USDT',
								},
							]}
							renderItem={item => <Portfolio data={item} />}
							keyExtractor={item => item.id}
						/>
					</View>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
							marginTop: 20,
						}}
					>
						<View style={{ marginHorizontal: 20 }}>
							<CustomeImage
								imagePath={require('../../assets/images/send.png')}
							/>
							<Text
								style={{
									fontSize: totalSize(1.8),
									alignSelf: 'center',
									color: '#FFFFFF',
									fontWeight: 700,
									marginTop: 15,
								}}
							>
								Send
							</Text>
						</View>
						<View style={{ marginHorizontal: 20 }}>
							<CustomeImage
								imagePath={require('../../assets/images/download.png')}
							/>
							<Text
								style={{
									fontSize: totalSize(1.8),
									alignSelf: 'center',
									color: '#FFFFFF',
									fontWeight: 700,
									marginTop: 15,
								}}
							>
								Recevie
							</Text>
						</View>
						<View style={{ marginHorizontal: 20 }}>
							<CustomeImage
								imagePath={require('../../assets/images/dicon.png')}
							/>
							<Text
								style={{
									fontSize: totalSize(1.8),
									alignSelf: 'center',
									color: '#FFFFFF',
									fontWeight: 700,
									marginTop: 15,
								}}
							>
								Buy
							</Text>
						</View>
						<View style={{ marginHorizontal: 20 }}>
							<View
								style={{
									width: width(14),
									height: height(7),
									borderRadius: width(12),
									backgroundColor: 'white',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<CustomeImage
									imagePath={require('../../assets/images/swap.png')}
								/>
							</View>
							<Text
								style={{
									fontSize: totalSize(1.8),
									alignSelf: 'center',
									color: '#FFFFFF',
									fontWeight: 700,
									marginTop: 15,
								}}
							>
								Swap
							</Text>
						</View>
					</View>
					<View style={{ marginTop: 20 }}>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-between',
								marginHorizontal: 5,
								marginVertical: 10,
							}}
						>
							<Text
								style={{
									color: '#FFFFFF',
									fontWeight: 500,
									fontSize: totalSize(2.2),
								}}
							>
								Market
							</Text>
							<TouchableOpacity
								onPress={() => {
									props.navigation.navigate('marketTrends');
								}}
							>
								<Text
									style={{
										color: 'gray',
										fontWeight: 500,
										fontSize: totalSize(1.6),
									}}
								>
									View All
								</Text>
							</TouchableOpacity>
						</View>
						<View
							style={{
								width: '100%',
								padding: 20,
								backgroundColor: '#444444',
								borderRadius: width(6),
								marginBottom: 30,
								flexDirection: 'row',
							}}
						>
							<CustomeImage
								imagePath={require('../../assets/images/alogo.png')}
							/>
							<View style={{ flex: 1, marginLeft: 13 }}>
								<View
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'space-between',
										// marginBottom: 10,
									}}
								>
									<Text
										style={{
											color: 'orange',
											fontSize: totalSize(2.2),
											fontWeight: 700,
										}}
									>
										Achain
									</Text>
									<Text
										style={{
											color: '#FFFFFF',
											fontSize: totalSize(1.8),
											fontWeight: 700,
										}}
									>
										23,927.00 RS
									</Text>
								</View>
								<View
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'space-between',
									}}
								>
									<Text
										style={{
											color: '#CCCCCC',
											fontSize: totalSize(1.6),
											fontWeight: 700,
										}}
									>
										ETH
									</Text>
									<Text
										style={{
											color: 'red',
											fontSize: totalSize(1.6),
											fontWeight: 700,
										}}
									>
										-4.18%
									</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const WalletBalance = (props: { data: any }) => {
	const { data } = props;

	return (
		<View style={{ flex: 1, marginHorizontal: 8 }}>
			<View
				style={{
					backgroundColor: data.cardBackground || 'orange',
					width: width(72),
					height: height(20),
					padding: 20,
					borderRadius: width(3),
					marginBottom: 20,
				}}
			>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<Text
						style={{
							color: '#FFFFFF',
							fontSize: totalSize(1.8),
							fontWeight: 400,
						}}
					>
						Total wallent balance
					</Text>
					<Text
						style={{
							color: '#FFFFFF',
							fontSize: totalSize(1.8),
							fontWeight: 400,
						}}
					>
						{data.currency}
					</Text>
				</View>
				<Text
					style={{
						color: '#FFFFFF',
						fontSize: totalSize(2.4),
						fontWeight: 700,
						marginVertical: 10,
					}}
				>
					{data.balance}
				</Text>
				<Text
					style={{
						color: '#FFFFFF',
						fontSize: totalSize(1.6),
						fontWeight: 400,
					}}
				>
					Weekly Profile
				</Text>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginTop: 5,
					}}
				>
					<Text
						style={{
							color: '#FFFFFF',
							fontSize: totalSize(1.6),
							fontWeight: 900,
						}}
					>
						1580.00 RS
					</Text>
					<Text
						style={{
							color: '#FFFFFF',
							fontSize: totalSize(1.6),
							fontWeight: 400,
						}}
					>
						{data.profitPercentage}
					</Text>
				</View>
			</View>
		</View>
	);
};

const Portfolio = (props: any) => {
	const { data } = props;

	return (
		<View style={{ flex: 1, marginRight: 16 }}>
			<View
				style={{
					width: width(50),
					padding: 20,
					backgroundColor: '#444444',
					borderRadius: width(6),
					marginTop: 10,
					marginBottom: 20,
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						paddingBottom: 10,
					}}
				>
					<Text style={{ color: '#CCCCCC' }}>{data.item.title}</Text>
					<View
						style={{
							backgroundColor: 'skyblue',
							width: width(13),
							height: height(3),
							borderRadius: width(3),
						}}
					>
						<Text
							style={{
								color: '#FFFFFF',
								justifyContent: 'center',
								alignSelf: 'center',
							}}
						>
							{data.item.profitPercentage}
						</Text>
					</View>
				</View>
				<Text
					style={{
						color: '#FFFFFF',
						fontSize: totalSize(2.2),
						fontWeight: 700,
					}}
				>
					{data.item.balance}
				</Text>
				<Text style={{ color: '#CCCCCC' }}>{data.item.subTitle}</Text>
			</View>
		</View>
	);
};
