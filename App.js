import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import MapView from 'react-native-maps';
import {Trucks} from './data';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: 40.20109939575195,
				longitude: 44.50162887573242,
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
                 key={truck.orderId}
                 coordinate={{latitude: truck.oroginLat, longitude: truck.originLng}}
               />
             )
           })
         }
         {
           Trucks.map(truck => {
             return (
               <MapView.Marker
                 key={truck.orderId}
                 pinColor="blue"
                 coordinate={{latitude: truck.destLat, longitude: truck.destLng}}
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
	},
});
