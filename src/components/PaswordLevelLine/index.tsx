/* eslint-disable no-fallthrough */
import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { Colors } from '../../utils/constants';
import { getLevelEvaluate } from '../../utils/evaluatePassword';

const PasswordLevelLine = ({ level }: any) => {
	const { progress, color } = getLevelEvaluate(level);
	const remaining = 4 - progress;

	return (
		<View>
			<View style={[styles.wrap]}>
				<View style={[styles.process, { flex: progress, borderBottomColor: color }]} />
				<View style={[styles.rest, { flex: remaining }]} />
			</View>

		</View>
	);
};

const styles = StyleSheet.create({
	wrap: { flexDirection: 'row' },
	process: { borderBottomWidth: 1, flex: 1 },
	rest: { borderBottomColor: Colors.SECONDARY, borderBottomWidth: 1, flex: 3 },
});

export default PasswordLevelLine;
