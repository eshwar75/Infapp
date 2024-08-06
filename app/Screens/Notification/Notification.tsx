import { SafeAreaView, ScrollView, Text, View } from 'react-native';
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

export const Notification: React.FunctionComponent<
	NativeStackScreenProps<LoginNavigatorParamList, 'notification'>
> = props => {
	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: appColors.primaryBackgroundColor,
			}}
		>
			<Header
				heading="Notification"
				onBackPress={() => props.navigation.goBack()}
			/>
			<ScrollView style={{ flex: 1, marginHorizontal: 15 }}>
				<View style={{ paddingBottom: 20 }}>
					<NotificationCard
						title="ETH recevied"
						message="0.08 ETH Received"
						messageRecivedTime="2 days ago"
						imagePath={require('../../assets/images/swap.png')}
					/>
					<NotificationCard
						title="Payment"
						message="Thank you your transaction is compeletd successfully"
						imagePath={require('../../assets/images/walleticon.png')}
					/>
					<NotificationCard
						title="Promotion"
						message="Invite friends - Get 1 coupons each!"
						imagePath={require('../../assets/images/binancecoin.png')}
					/>
					<NotificationCard
						title="New Coin"
						message="New bld 0.2 ETH"
						messageRecivedTime="5 days ago"
						imagePath={require('../../assets/images/pound.png')}
					/>
					<NotificationCard
						title="payment"
						message="Thank you your tranaction is compoleted successfully"
						imagePath={require('../../assets/images/walleticon.png')}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

interface NotificationCardTypes {
	title: string;
	message: string;
	messageRecivedTime?: string;
	imagePath: any;
}

export const NotificationCard = (props: NotificationCardTypes) => {
	const { title, message, messageRecivedTime, imagePath } = props;
	return (
		<View
			style={{
				width: '100%',
				backgroundColor: '#050526',
				paddingHorizontal: 20,
				paddingVertical: 30,
				borderRadius: width(3),
				marginTop: 15,
				flexDirection: 'row',
			}}
		>
			<CustomeImage imagePath={imagePath} />
			<View style={{ flex: 1, marginLeft: 20 }}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginBottom: 4,
					}}
				>
					<Text
						style={{
							fontSize: totalSize(2.4),
							fontWeight: '500',
							color: '#ffffff',
						}}
					>
						{title}
					</Text>
				</View>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<Text
						style={{
							width: messageRecivedTime ? '75%' : '100%',
							fontSize: totalSize(1.6),
							fontWeight: '400',
							color: '#CCCCCC',
						}}
						numberOfLines={1}
					>
						{message}
					</Text>
					{messageRecivedTime && (
						<Text
							style={{
								fontSize: totalSize(1.6),
								fontWeight: '300',
								color: '#CCCCCC',
							}}
						>
							{messageRecivedTime}
						</Text>
					)}
				</View>
			</View>
		</View>
	);
};
