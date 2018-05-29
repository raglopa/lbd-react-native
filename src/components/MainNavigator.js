import React from 'react'
import { createDrawerNavigator, createStackNavigator } from 'react-navigation'
import { MaterialIcons } from '@expo/vector-icons'

import AboutScreen from './screens/AboutScreen'
import SettingsScreen from './screens/SettingsScreen'
import NextLaunchScreen from './NextLaunch'
import LatestLaunchScreen from './LatestLaunch'
import LaunchBrowserScreen from './LaunchBrowser'
import CapsuleScreen from './screens/CapsuleScreen'
import CoreScreen from './screens/CoreScreen'
import CompanyScreen from './screens/CompanyScreen'
import LaunchpadScreen from './screens/LaunchpadScreen'
import RocketScreen from './screens/RocketScreen'
import LaunchDetails from './LaunchDetails'
import SplashScreen from './SplashScreen'

import DrawerContent from './DrawerContent'

import stackNavigatorHOC from './StackNavigatorHOC'

const AppScreen = createDrawerNavigator(
  {
    NextLaunchScreen: {
      screen: stackNavigatorHOC(NextLaunchScreen),
      navigationOptions: {
        title: `Next mission`,
        drawerIcon: (
          <MaterialIcons name={'access-time'} size={24} color={'black'} />
        )
      }
    },
    LatestLaunchScreen: {
      screen: stackNavigatorHOC(LatestLaunchScreen),
      navigationOptions: {
        title: `Latest mission`,
        drawerIcon: <MaterialIcons name={'tv'} size={24} color={'black'} />
      }
    },
    LaunchesScreen: {
      screen: stackNavigatorHOC(LaunchBrowserScreen, {
        key: 'MissionDetails',
        component: LaunchDetails
      }),
      navigationOptions: {
        title: `MissionBrowser`,
        drawerIcon: <MaterialIcons name={'search'} size={24} color={'black'} />
      }
    },
    // RocketScreen: {
    //   screen: stackNavigatorHOC(RocketScreen),
    //   navigationOptions: {
    //     title: `Rockets`,
    //   }
    // },
    // CapsuleScreen: {
    //   screen: stackNavigatorHOC(CapsuleScreen),
    //   navigationOptions: {
    //     title: `Capsule`,
    //   }
    // },
    // CoreScreen: {
    //   screen: stackNavigatorHOC(CoreScreen),
    //   navigationOptions: {
    //     title: `Core`,
    //   }
    // },
    // CompanyScreen: {
    //   screen: stackNavigatorHOC(CompanyScreen),
    //   navigationOptions: {
    //     title: `About SpaceX`,
    //   }
    // },
    // LaunchpadScreen: {
    //   screen: stackNavigatorHOC(LaunchpadScreen),
    //   navigationOptions: {
    //     title: `Launchpads`,
    //   }
    // },
    // SettingsScreen: {
    //   screen: stackNavigatorHOC(SettingsScreen),
    //   navigationOptions: {
    //     title: `Settings`,
    //     drawerIcon: <MaterialIcon name={'settings'} size={24} color={'black'} />
    //   }
    // },
    AboutScreen: {
      screen: stackNavigatorHOC(AboutScreen),
      navigationOptions: {
        title: `About`,
        drawerIcon: (
          <MaterialIcons name={'info-outline'} size={24} color={'black'} />
        )
      }
    }
  },
  {
    initialRouteName: 'NextLaunchScreen',
    navigationOptions: {},
    contentComponent: DrawerContent
  }
)

const MainNavigator = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen
    },
    AppScreen: {
      screen: AppScreen
    }
  },
  {
    initialRouteName: 'SplashScreen',
    navigationOptions: {
      header: null
    },
    contentComponent: DrawerContent
  }
)
export default MainNavigator