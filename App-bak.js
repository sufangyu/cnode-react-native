import React, {Component} from 'react';
import {StyleSheet, Image, View} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { createStackNavigator, createAppContainer } from "react-navigation";

import iconHome from './assets/tabbar/home.png';
import iconHomeSelected from './assets/tabbar/home-selected.png';
import iconCollection from './assets/tabbar/collection.png';
import iconCollectionSelected from './assets/tabbar/collection-selected.png';
import iconMine from './assets/tabbar/mine.png';
import iconMineSelected from './assets/tabbar/mine-selected.png';

import HomePage from './app/views/home';
import CollectionPage from './app/views/collection';
import MinePage from './app/views/mine';

let navigation = null;
const dataSource = [
	{
		icon: iconHome,
		selectedIcon: iconHomeSelected
		,
		tabPage:'Home',
		tabName:'首页',
		component: HomePage
	},
	{
		icon: iconCollection,
		selectedIcon: iconCollectionSelected,
		tabPage:'Collection',
		tabName:'收藏',
		component: CollectionPage
	},
	{
		icon: iconMine,
		selectedIcon: iconMineSelected,
		tabPage: 'Mine',
		tabName: '我的',
		component: MinePage
	}
];

const AppNavigator = createStackNavigator({
	Home: {
		screen: HomePage,
	},
});

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: 'Home',
		};
	}

  render() {
		const tabViews = dataSource.map((item, i) => {
			return (
				<TabNavigator.Item
					title={item.tabName}
					selected={this.state.selectedTab === item.tabPage}
					titleStyle={{color:'#999999'}}
					selectedTitleStyle={{color:'#007fff'}}
					renderIcon={()=><Image style={styles.tabIcon} source={item.icon} />}
					renderSelectedIcon = {() => <Image style={styles.tabIcon} source={item.selectedIcon} />}
					tabStyle={{alignSelf:'center'}}
					onPress = {() => {this.setState({selectedTab:item.tabPage})}}
					key={i}
				>
					<item.component navigation={navigation}/>
				</TabNavigator.Item>
			);
		});

    return (
      <View style={styles.container}>
				<TabNavigator
					hidesTabTouch={true}
				>
					{tabViews}
				</TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
	},
	tabIcon:{
		width: 23,
		height: 23,
	},
});
