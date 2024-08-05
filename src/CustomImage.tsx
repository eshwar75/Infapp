import { Image, type ImageStyle } from 'react-native';
import { height, width } from './dimensions';

interface customeImageType {
	imagePath: any;
	imageStyle?: ImageStyle;
}

export const CustomeImage = (props: customeImageType) => {
	const { imagePath, imageStyle: propsimageStyle } = props;
	return <Image source={imagePath} style={[imageStyle, propsimageStyle]} />;
};

const imageStyle: ImageStyle = {
	width: width(14),
	height: height(7),
	borderRadius: width(10),
};
