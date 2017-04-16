import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import {Trucks} from './data';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: 40.167945861816406,
				longitude: 44.439117431640625,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    }
  }
  render() {
    return (
      <MapView
         style={styles.map}
         initialRegion={this.state.region}
       >
         {
           Trucks.map(truck => {
             return (
               <MapView.Marker
                 key={truck.id}
                 coordinate={{latitude: truck.positionLat, longitude: truck.positionLang}}
               />
             )
           })
         }
       </MapView>
    );
  };
};

const styles = StyleSheet.create({
	map: {
		...StyleSheet.absoluteFillObject,
	}
});
