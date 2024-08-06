import { Image, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { appColors, width, totalSize, height } from '../../src';

interface headerTypes {
	heading?: string;
	onBackPress?(): void;
	isenableMenu?: boolean;
	onNotificationPress?(): void;
	isEnableNotification?: boolean;
}

export const Header = (props: headerTypes) => {
	const {
		heading,
		onBackPress,
		isenableMenu = false,
		onNotificationPress,
		isEnableNotification = false,
	} = props;
	return (
		<View style={container}>
			<TouchableOpacity
				style={backStyle}
				onPress={onBackPress}
				accessibilityLabel="back_icon"
			>
				<Image
					source={
						isenableMenu
							? require('../assets/images/menu.png')
							: require('../assets/images/backIcon.png')
					}
					style={{
						width: 30,
						height: 30,
						borderRadius: width(5),
					}}
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
					accessibilityLabel="back_icon"
				>
					<Image
						source={require('../assets/images/notification.png')}
						style={{
							width: 30,
							height: 30,
							borderRadius: width(6),
						}}
					/>
				</TouchableOpacity>
			)}
		</View>
	);
};

const FLEX: ViewStyle = {
	width: '80%',
	alignItems: 'center',
	justifyContent: 'center',
};

const backStyle: ViewStyle = {
	width: width(10),
	height: height(5),
	borderRadius: width(5),
	alignItems: 'center',
	justifyContent: 'center',
};

const container: ViewStyle = {
	height: height(7.5),
	flexDirection: 'row',
	alignItems: 'center',
	paddingHorizontal: 10,
};
