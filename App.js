import React, {Component} from 'react';
import Navigation from './app/navigation'

// import iconHome from './assets/tabbar/home.png';
// import iconHomeSelected from './assets/tabbar/home-selected.png';
// import iconCollection from './assets/tabbar/collection.png';
// import iconCollectionSelected from './assets/tabbar/collection-selected.png';
// import iconMine from './assets/tabbar/mine.png';
// import iconMineSelected from './assets/tabbar/mine-selected.png';
//
// import HomePage from './app/views/home';
// import CollectionPage from './app/views/collection';
// import MinePage from './app/views/mine';
//
// let navigation = null;
// const dataSource = [
// 	{
// 		icon: iconHome,
// 		selectedIcon: iconHomeSelected
// 		,
// 		tabPage:'Home',
// 		tabName:'首页',
// 		component: HomePage
// 	},
// 	{
// 		icon: iconCollection,
// 		selectedIcon: iconCollectionSelected,
// 		tabPage:'Collection',
// 		tabName:'收藏',
// 		component: CollectionPage
// 	},
// 	{
// 		icon: iconMine,
// 		selectedIcon: iconMineSelected,
// 		tabPage: 'Mine',
// 		tabName: '我的',
// 		component: MinePage
// 	}
// ];
//
// const AppNavigator = createStackNavigator({
// 	Home: {
// 		screen: HomePage,
// 	},
// });

export default class App extends Component {
  render() {
    return (
			<Navigation />
    );
  }
}
