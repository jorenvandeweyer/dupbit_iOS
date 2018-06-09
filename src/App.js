import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';

let loggedIn = false;

export default class App extends React.Component {
  render() {
    if (!loggedIn) {
      return (
        <View style={styles.container}>
          <Image style={{ flex: 1, resizeMode: 'repeat', width: '100%', height: '100%', backgroundColor: '#ccc', justifyContent: 'center' }} source={require('./resources/images/banner.png')} />
          <Text style={{ position: 'absolute', top: '10%', color: 'white', fontSize: 70 }}>Dupbit Connect</Text>
          <TextInput placeholder={'Username'} style={styles.username}></TextInput>
          <TextInput placeholder={'Password'} style={styles.password}></TextInput>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  username: {
    position: 'absolute',
    top: '30%',
    width: '50%',
    height: '10%',
    backgroundColor: 'white',
    color: 'grey',
    borderRadius: 25,
    padding: 20,
    fontSize: 20
  },
  password: {
    position: 'absolute',
    top: '60%',
    width: '45%',
    height: '10%',
    backgroundColor: 'white',
    color: 'grey',
    borderRadius: 25,
    padding: 20,
    fontSize: 20
  }
});
