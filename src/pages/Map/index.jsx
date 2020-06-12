import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
  StyleSheet,
  PermissionsAndroid,
} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import getDirections from 'react-native-google-maps-directions';

import Geocoder from 'react-native-geocoding';
import styles from './styles';

const GOOGLE_MAPS_APIKEY = 'AIzaSyAI_SSk3MPO6qPZ4rDi4LWI2UvZJvga6ak';

export default class Map extends Component {
  state = {
    origin: { latitude: -16.6799, longitude: -49.255 },
    destination: { latitude: -16.6799, longitude: -49.255 },
    originText: '',
    destinationText: '',
  };

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const newOrigin = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        console.log('new origin');
        console.log(newOrigin);

        this.setState({
          origin: newOrigin,
        });
      },
      (err) => {
        console.log('error');
        console.log(err);
      },
      { enableHighAccuracy: true, timeout: 2000, maximumAge: 1000 }
    );
  };

  async componentDidMount() {
    const isGranted = await this.requestLocationPermission();

    if (isGranted) {
      this.getLocation();
    }

    this.getLocation();
  }

  handleButton = () => {
    if (this.state.originText != '') {
      Geocoder.init(GOOGLE_MAPS_APIKEY); // use a valid API key

      Geocoder.from(this.state.originText)
        .then((json) => {
          const { location } = json.results[0].geometry;
          console.log(location);
          this.setState({
            origin: { latitude: location.lat, longitude: location.lng },
          });
        })
        .catch((error) => console.warn(error));
    } else {
      alert('Digite a origem ! ');
    }

    if (this.state.destinationText != '') {
      Geocoder.init(GOOGLE_MAPS_APIKEY); // use a valid API key

      Geocoder.from(this.state.destinationText)
        .then((json) => {
          const { location } = json.results[0].geometry;
          console.log(location);
          this.setState({
            destination: { latitude: location.lat, longitude: location.lng },
          });
        })
        .catch((error) => console.warn(error));
    } else {
      alert('Digite o destino ! ');
    }
  };

  handleGetGoogleMapDirections = () => {
    const data = {
      source: this.state.origin,
      destination: this.state.destination,
      params: [
        {
          key: 'travelmode',
          value: 'driving',
        },
      ],
    };

    getDirections(data);
  };

  async requestLocationPermission() {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'App Location Permission',
        message:
          'Maps App needs access to your map ' + 'so you can be navigated.',
      }
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the location');
      return true;
    }
    console.log('location permission denied');
    return false;
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          ref={(map) => (this.mapView = map)}
          style={styles.map}
          region={{
            latitude:
              (this.state.origin.latitude + this.state.destination.latitude) /
              2,
            longitude:
              (this.state.origin.longitude + this.state.destination.longitude) /
              2,
            latitudeDelta:
              Math.abs(
                this.state.origin.latitude - this.state.destination.latitude
              ) +
              Math.abs(
                this.state.origin.latitude - this.state.destination.latitude
              ) *
                0.1,
            longitudeDelta:
              Math.abs(
                this.state.origin.longitude - this.state.destination.longitude
              ) +
              Math.abs(
                this.state.origin.longitude - this.state.destination.longitude
              ) *
                0.1,
          }}
          loadingEnabled
          toolbarEnabled
          zoomControlEnabled
        >
          <MapView.Marker coordinate={this.state.destination}>
            <MapView.Callout onPress={this.handleGetGoogleMapDirections}>
              <Text>Press to Get Direction</Text>
            </MapView.Callout>
          </MapView.Marker>

          <MapView.Marker coordinate={this.state.origin}>
            <MapView.Callout>
              <Text>This is where you are</Text>
            </MapView.Callout>
          </MapView.Marker>

          <MapViewDirections
            origin={this.state.origin}
            destination={this.state.destination}
            apikey={GOOGLE_MAPS_APIKEY}
          />
        </MapView>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ originText: text })}
            placeholder="Origem"
            value={this.state.originText}
          />

          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ destinationText: text })}
            placeholder="Destino"
            value={this.state.destinationText}
          />

          <TouchableOpacity style={styles.button} onPress={this.handleButton}>
            <Text style={styles.buttonText}>Buscar rota</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
