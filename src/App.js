import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  AsyncStorage
} from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      username: '',
      password: ''
    }
  }

  render() {
    if (true) {
      return (
        <View style={styles.container}>
          <Image style={{ flex: 1, resizeMode: 'repeat', width: '100%', height: '100%', backgroundColor: '#ccc', justifyContent: 'center' }} source={require('./resources/images/banner.png')} />
          <Text style={{ position: 'absolute', top: '10%', color: 'white', fontSize: 70 }}>Dupbit Connect</Text>
          <TextInput onChangeText={(username => this.setState({ username }))} placeholder={'Username'} style={styles.username}/>
          <TextInput secureTextEntry={true} onChangeText={(password) => this.setState({password})} placeholder={'Password'} style={styles.password}/>
          <Button title={'Login'} onPress={() => login(this.state.username, this.state.password)}/>
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

function login(username, password) {

}
