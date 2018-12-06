import React from 'react'
import { View, StyleSheet } from 'react-native'

import Home from './Home'
import Stars from './Stars'
import Planet from './Planet';
import Lookout from './Lookout';
import Weather from './Weather'

const NavBar = () => {
  return (
    <View style={styles.navbarContainer}>
      <View style={styles.navitem}>
        <Home />
      </View>
      <View style={styles.navitem}>
        <Stars />
      </View>
      <View style={styles.navitem}>
        <Planet />
      </View>
      <View style={styles.navitem}>
        <Lookout />
      </View>
      <View>
        <Weather />
      </View>
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({
  navbarContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  navitem: {
    marginRight: 15,
  }
})