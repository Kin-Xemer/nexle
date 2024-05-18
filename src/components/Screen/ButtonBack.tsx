import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import image from '../../assets';
const HIT_SLOP = {top: 24, right: 24, left: 24, bottom: 24};

const ButtonBack = (props: any) => {
  return (
		<TouchableOpacity onPress={props.onPress} hitSlop={HIT_SLOP}>
			<Image source={image.icon.Arrow} style={styles.icon} />
		</TouchableOpacity>
	);
};

export default ButtonBack;

const styles = StyleSheet.create({
  icon: {
    height: 14,
    width: 7,
  },
});
