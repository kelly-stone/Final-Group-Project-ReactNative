import React from "react";
import { Actions } from 'react-native-router-flux';
import { View, StyleSheet } from 'react-native'
import { List, ListItem } from 'react-native-elements'

import NavBar from './Navbar/NavBar'
import planets from '../../data/planets';

export default class PlanetList extends React.Component {

  render() {
    return (
      <View>
        <List containerStyle={{ marginBottom: 0 }}>
          {
            planets.map((planet) => (
              <ListItem
                onPress={() => Actions.planetdetails({ planet: planet })}
                roundAvatar
                avatar={planet.icon}
                key={planet.name}
                title={planet.name}
              />
            ))
          }
        </List>
        <View style={styles.container}>
          <NavBar />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 320
  },
});