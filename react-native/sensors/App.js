import React, { useEffect, useState, Fragment } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import { Gyroscope } from 'expo-sensors';

export default function App() {
  const [locationPermission, setLocationPermission] = useState(false);
  const [gyroscope, setGyroscope] = useState({ x: '', y: '', z: '' });
  const [location, setLocation] = useState(null);

  useEffect(() => {
    Permissions.askAsync(Permissions.LOCATION)
      .then(({ status }) => setLocationPermission(status === 'granted'));

    Gyroscope.isAvailableAsync()
      .then(data => {
        if(data) {
          Gyroscope.addListener(getGyroscope)
        }
      });

    return () => {
      Gyroscope.removeAllListeners();
    }
  }, []);

  function getGyroscope({ x, y, z }) {
    setGyroscope({ x, y, z });
  }

  async function handleLocation() {
    const data = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Low
    });
    setLocation(data);
  }

  return (
    <View style={styles.container}>
      <Button
        title="get location"
        onPress={handleLocation}
      />
      <Text>{round(gyroscope.x)}</Text>
      <Text>{round(gyroscope.y)}</Text>
      <Text>{round(gyroscope.z)}</Text>
      {location && (
        <Fragment>
          <Text>{location.coords.longitude}</Text>
          <Text>{location.coords.latitude}</Text>
          <Text>{Date(location.timestap).toLocaleString()}</Text>
        </Fragment>
      )}
    </View>
  );
}

function round(n) {
  if (!n) {
    return 0;
  }

  return Math.floor(n * 100) / 100;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
