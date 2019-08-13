import React from 'react'
import { createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'
//createDrawerNavigator, createBottomTabNavigator, createMaterialTopTabNavigator
//createStackNavigator

import Icon from 'react-native-vector-icons/FontAwesome'

import Splash from './pages/splash/Splash'
import Login from './pages/login/Login'
import Main from './pages/main/Main'
import Profile from './pages/profile/Profile'

const MenuRoutes = {
    Main: {
        name: 'Main', 
        screen: Main,
        navigationOptions: {
            title: 'Main',
            tabBarIcon: ({ tintColor }) => <Icon name='user' size={30} color={tintColor} />
        }
    },
    Profile: {
        name: 'Profile',
        screen: Profile,
        navigationOptions: {
            title: 'Profile',
        }
    }
}

const MenuConfig = {
    initialRouteName: 'Main',
    tabBarOptions: {
        showLabel: true,
    }
}

const MenuNavigation = createBottomTabNavigator(MenuRoutes, MenuConfig)

const SplashRouter = createSwitchNavigator({
    Splash: Splash,
    App: MenuNavigation,
})

export default createAppContainer(SplashRouter)

