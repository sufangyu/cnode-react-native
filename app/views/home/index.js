import React, {Component} from 'react';
import {Platform, StyleSheet, Button, Text, View} from 'react-native';

export default class Home extends Component {
	render() {
		return (
			<View>
				<Text>首页</Text>
				<Button
					title="Go to Mine"
					onPress={() => this.props.navigation.navigate('One')}
				/>
			</View>
		);
	};
};
