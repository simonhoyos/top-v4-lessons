import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [cameraRollPermission, setCameraRollPermission] = React.useState('denied');
  const [cameraPermission, setCameraPermission] = React.useState('denied');
  const [image, setImage] = React.useState(null);

  React.useEffect(() => {
    Permissions.askAsync(Permissions.CAMERA)
      .then(({ status }) => setCameraPermission(status))
    Permissions.askAsync(Permissions.CAMERA_ROLL)
      .then(({ status }) => setCameraRollPermission(status))
  });

  async function pickImage() {
    const data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    setImage(data);
  }

  async function takePicture() {
    const data = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    setImage(data);
  }

  if (cameraPermission === 'denied') return (
    <View style={styles.container}>
      <Text>No tienes permisos</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <Button
        title="Seleccionar fotos"
        onPress={pickImage}
      />
      <Button
        title="Tomar foto"
        onPress={takePicture}
      />
      {image && (
        <Image
          style={styles.image}
          source={{ uri: image.uri }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 500,
    height: 500,
  }
});
