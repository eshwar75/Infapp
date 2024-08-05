import * as React from 'react';
import { TextInput, View, ViewStyle, TextStyle, Image } from 'react-native';
import type { TextInputProps } from 'react-native';
import { appColors, totalSize, width } from '../../src';

export interface InputProps extends TextInputProps {
	placeholderName: string;
	disableFocus?: boolean;
	onChangeText(text: string): void;
	inputType: 'password' | 'email' | 'custom' | 'number';
	maxLimit?: number;
	value?: string;
	charactersRemainingText?: string;
}

export const Input = (props: InputProps) => {
	const {
		placeholderName: placeholder,
		onChangeText,
		value,
		inputType,
		maxLimit,
	} = props;
	const length = React.useRef(value?.length);

	return (
		<View style={BASEVIEW}>
			<View style={flexRowDirection}>
				<View
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						paddingHorizontal: 10,
					}}
				>
					<Image
						source={require('../assets/images/search1.png')}
						style={{
							width: 35,
							height: 35,
							borderRadius: width(7),
						}}
					/>
				</View>
				<TextInput
					style={[
						FULL,
						placeholderStyle,
						{ color: appColors.headingTextColor },
					]}
					placeholder={placeholder}
					value={value}
					maxLength={maxLimit}
					placeholderTextColor={appColors.headingTextColor}
					secureTextEntry={inputType === 'password' ? true : false}
					autoCorrect={
						inputType === 'password' || inputType === 'email' ? false : true
					}
					autoCapitalize="none"
					keyboardType={
						inputType === 'email'
							? 'email-address'
							: inputType === 'number'
							? 'number-pad'
							: 'default'
					}
					{...props}
					onChangeText={text => {
						length.current = text.length;
						onChangeText(text);
					}}
				/>
			</View>
		</View>
	);
};

const FULL: ViewStyle = { flex: 1 };

const BASEVIEW: ViewStyle = {
	backgroundColor: '#09111c',
	paddingVertical: 4,
	marginVertical: 8,
	borderRadius: width(9),
};

const placeholderStyle: TextStyle = {
	fontSize: totalSize(2.2),
	paddingVertical: 10,
	paddingHorizontal: 1,
};

const flexRowDirection: ViewStyle = {
	flexDirection: 'row',
};
