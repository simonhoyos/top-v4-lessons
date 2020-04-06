import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button } from 'react-native';

export default function App() {
  const [value, setValue] = React.useState('hola');
  const [list, setList] = React.useState([]);

  function handleChange(e) {
    const { value } = e.target;
    setValue(value);
  }

  function handlePress() {
    const newList = [...list, value];
    console.log(newList);
    setList(newList);
    console.log(list);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title</Text>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <Text style={styles.text}>Hola Mundo</Text>
      <ScrollView style={{ height: 250, backgroundColor: '#fff' }}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ut, vero laborum tempore doloremque voluptatibus cum nisi maxime neque quibusdam eligendi nostrum quod laboriosam vel commodi ad hic, aliquam exercitationem!</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ut, vero laborum tempore doloremque voluptatibus cum nisi maxime neque quibusdam eligendi nostrum quod laboriosam vel commodi ad hic, aliquam exercitationem!</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ut, vero laborum tempore doloremque voluptatibus cum nisi maxime neque quibusdam eligendi nostrum quod laboriosam vel commodi ad hic, aliquam exercitationem!</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ut, vero laborum tempore doloremque voluptatibus cum nisi maxime neque quibusdam eligendi nostrum quod laboriosam vel commodi ad hic, aliquam exercitationem!</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ut, vero laborum tempore doloremque voluptatibus cum nisi maxime neque quibusdam eligendi nostrum quod laboriosam vel commodi ad hic, aliquam exercitationem!</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ut, vero laborum tempore doloremque voluptatibus cum nisi maxime neque quibusdam eligendi nostrum quod laboriosam vel commodi ad hic, aliquam exercitationem!</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ut, vero laborum tempore doloremque voluptatibus cum nisi maxime neque quibusdam eligendi nostrum quod laboriosam vel commodi ad hic, aliquam exercitationem!</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ut, vero laborum tempore doloremque voluptatibus cum nisi maxime neque quibusdam eligendi nostrum quod laboriosam vel commodi ad hic, aliquam exercitationem!</Text>
      </ScrollView>
      {/* <Image source="https://reactnative.dev/docs/assets/p_cat2.png" /> */}
      <Image source="https://reactnative.dev/docs/assets/p_cat2.png" style={{width: 200, height: 200}}/>
      <TextInput style={styles.input} value={value} onChange={handleChange} />
      <Button onPress={handlePress} title="Submit"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#fff'
  }
});
