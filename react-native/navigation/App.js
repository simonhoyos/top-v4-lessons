import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, AsyncStorage } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import axios from 'axios';

function Home({ navigation }) {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    axios({
      method: 'GET',
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: '/posts'
    })
      .then(({ data }) => setPosts(data));
    // AsyncStorage.setItem('token', 'Something secret');
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
            <Button
              title="View more"
              onPress={() => navigation.navigate('post', {
                id: item.id
              })}
            />
          </View>
        )}
        keyExtractor={({ id }) => `post_${id}`}
      />
    </View>
  );
}

function Post({ navigation }) {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios({
      method: 'GET',
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: `/posts/${navigation.getParam('id')}`
    })
      .then(({ data }) => setPost(data));
  }, []);

  return (
    <View style={styles.container}>
      {post && (
        <React.Fragment>
          <Text style={styles.title}>{post.title}</Text>
          <Text styel={styles.body}>{post.body}</Text>
          <Button
            title="view user profile"
            onPress={() => navigation.navigate('profile')}
          />
        </React.Fragment>
      )}
    </View>
  );
}

function Profile({ navigation }) {
  const [token, setToken] = React.useState('');
  async function handlePress() {
    AsyncStorage.removeItem('token');
    const value = await AsyncStorage.getItem('token');
    setToken(value);

    if(!value) {
      navigation.replace('home');
    }
  }

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Text>{token}</Text>
      <Button
        title="get token"
        onPress={handlePress}
      />
    </View>
  )
}

const Routes = createStackNavigator({
  home: Home,
  post: Post,
  profile: Profile
});

const AppContainer = createAppContainer(Routes);

export default function App() {
  return (
    <AppContainer />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  body: {
    fontSize: 16,
  }
});
