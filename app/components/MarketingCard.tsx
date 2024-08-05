import { Text, View } from 'react-native';
import { CustomeImage, totalSize, width } from '../../src';

interface marketingCardTypes {
	title: string;
	subTitle: string;
	amount: string;
	percentage: string;
	color: 'red' | 'green' | 'pink' | 'lightgreen';
	imagePath: any;
}

export const MarketingCard = (props: marketingCardTypes) => {
	const {
		title,
		subTitle,
		amount,
		percentage,
		color = 'red',
		imagePath,
	} = props;
	return (
		<View
			style={{
				width: '100%',
				backgroundColor: '#444444',
				padding: 20,
				borderRadius: width(3),
				marginTop: 15,
				flexDirection: 'row',
			}}
		>
			<CustomeImage imagePath={imagePath} />
			<View style={{ flex: 1, marginLeft: 10 }}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginBottom: 4,
					}}
				>
					<Text
						style={{
							fontSize: totalSize(2.2),
							fontWeight: '600',
							color: '#ffffff',
						}}
					>
						{title}
					</Text>
					<Text
						style={{
							fontSize: totalSize(2.4),
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
		</View>
	);
};
