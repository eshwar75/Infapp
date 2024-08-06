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

export const IndividualPortfolio: React.FunctionComponent<
	NativeStackScreenProps<LoginNavigatorParamList, 'individualPortfolio'>
> = props => {
	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: appColors.primaryBackgroundColor,
			}}
		>
			<Header
				heading={props.route.params.screenheading}
				onBackPress={() => props.navigation.goBack()}
			/>
			<ScrollView>
				<View style={{ flex: 1, marginHorizontal: 10 }}>
					<View
						style={{
							width: '100%',
							padding: 20,
							backgroundColor: '#444444',
							borderRadius: width(6),
							flexDirection: 'row',
						}}
					>
						<CustomeImage
							imagePath={require('../../assets/images/bitcoin.png')}
						/>
						<View style={{ flex: 1, marginLeft: 13 }}>
							<Text
								style={{
									color: '#ffffff',
									fontSize: totalSize(2.8),
									fontWeight: 700,
								}}
							>
								40,900.64
							</Text>
							<Text
								style={{
									color: '#93C54B',
									fontSize: totalSize(1.8),
									fontWeight: 300,
								}}
							>
								+508.20(+0.31)
							</Text>
						</View>
					</View>
					<View
						style={{
							flexDirection: 'row',
							flexWrap: 'wrap',
							justifyContent: 'space-between',
							alignItems: 'center',
							marginTop: 10,
						}}
					>
						<ShareCard title="Market Cap" amount="20,351.00" />
						<ShareCard title="Volume (24 hours)" amount="98669.59" />
						<ShareCard title="Volume (24 hours)" amount="98669.59" />
						<ShareCard title="Volume (24 hours)" amount="98669.59" />
						<ShareCard title="Volume (24 hours)" amount="98669.59" />
						<ShareCard title="Volume (24 hours)" amount="98669.59" />
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
								width: '47%',
								height: height(6),
								borderRadius: width(8),
								alignItems: 'center',
								justifyContent: 'center',
								marginLeft: 2,
							}}
						>
							<Text
								style={{
									fontSize: totalSize(2.2),
									fontWeight: 600,
									color: '#FFFFFF',
								}}
							>
								Sell
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								backgroundColor: '#A6AE42',
								width: '47%',
								height: height(6),
								borderRadius: width(8),
								alignItems: 'center',
								justifyContent: 'center',
								marginLeft: 2,
							}}
						>
							<Text
								style={{
									fontSize: totalSize(2.2),
									fontWeight: 600,
									color: '#FFFFFF',
								}}
							>
								Buy
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const ShareCard = (props: { title?: string; amount?: string }) => {
	const { title, amount } = props;

	return (
		<View
			style={{
				width: '48%',
				backgroundColor: '#444444',
				paddingHorizontal: 20,
				paddingVertical: 10,
				borderRadius: width(4),
				marginTop: 10,
			}}
		>
			<Text
				style={{
					color: '#93C54B',
					fontSize: totalSize(1.8),
					fontWeight: 400,
				}}
			>
				{title}
			</Text>
			<Text
				style={{
					color: '#ffffff',
					fontSize: totalSize(2.2),
					fontWeight: 700,
				}}
			>
				{amount}
			</Text>
		</View>
	);
};
