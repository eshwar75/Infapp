import { Image, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { appColors, width, totalSize, height } from '../../src';

interface headerTypes {
	heading?: string;
	onBackPress?(): void;
	enableMenu?: boolean;
}

export const Header = (props: headerTypes) => {
	const { heading, onBackPress, enableMenu = false } = props;
	return (
		<View style={container}>
			<TouchableOpacity
				style={backStyle}
				onPress={onBackPress}
				accessibilityLabel="back_icon"
			>
				<Image
					source={
						enableMenu
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
			{heading && (
				<View style={FLEX}>
					<Text
						numberOfLines={2}
						style={{
							fontSize: totalSize(2.5),
							color: appColors.headingTextColor,
							textAlign: 'center',
							fontWeight: 800,
						}}
					>
						{heading}
					</Text>
				</View>
			)}
		</View>
	);
};

const FLEX: ViewStyle = {
	flex: 1,
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
};
