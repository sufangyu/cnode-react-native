import {
	createStackNavigator,
	createBottomTabNavigator,
	createAppContainer
} from 'react-navigation';

import HomePage from '../views/home';
import CollectionPage from '../views/collection';
import MinePage from '../views/mine';
import One from '../views/one';

const BottomBar = createBottomTabNavigator(
	{
		Home: {
			screen: HomePage,
			navigationOptions: {
				title: '首页'
			},
		},
		Collection: {
			screen: CollectionPage,
			navigationOptions: {
				title: '收藏'
			},
		},
		Mine: {
			screen: MinePage,
			navigationOptions: {
				title: '我的'
			},
		}
	},
	{
		initialRouteName: 'Home', // 初始化页面
		tabBarOptions: {
			activeTintColor: '#007fff',
			inactiveTintColor: '#999',
		},
	},
);

const Stack = createStackNavigator({
	BottomBar: {
		screen: BottomBar,
		navigationOptions: {
			header: null
		}
	},
	One: {
		screen: One,
	},
});

export default createAppContainer(Stack);

