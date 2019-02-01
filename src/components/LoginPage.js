import  React, {Component} from 'react';
import {Text, TextInput, Button, View, TouchableOpacity} from 'react-native';
import  {createStackNavigator, createAppContainer}  from  'react-navigation';
import RegisterPage from './RegisterPage.js';
import HomePage from  './HomePage.js';

export class LoginPage extends Component{
  render(){
    return(
        <View style = {styles.container}>
          <View style = {styles.buttonText}>
            <TextInput style = {styles.input}
                       placeholder = "username"
                       returnKeyType = "next"
                       onSubmitEditing = {() => this.passwordInput.focus()}
                       keyboardTyoe = 'email-adress'
                       autoCapitalize = "none"
                       autoCorrect = {false}
            />
            <TextInput style = {styles.input}
                       placeholder = "password"
                       returnKeyType = "go"
                       ref = {(input) => this.passwordInput = input}
            />
            <TouchableOpacity style = {styles.container} onPress = {() => this.props.navigation.navigate('Home')}>
              <Text style = {styles.buttonText}> Login </Text>
            </TouchableOpacity>
            <Button
                title = "Register Here"
                color = "#1abc9c"
                onPress = {() => this.props.navigation.navigate('Register')}/>

          </View>
        </View>
    );

  }

}
/*
export default class App extends Component{
  render(){
    return(
        <AppStackNavigator />

    );
  }

}*/

const AppStackNavigator = createStackNavigator({
  Login: LoginPage,
  Register: RegisterPage,
  Home: HomePage
});

const App = createAppContainer(AppStackNavigator);
export default App;

const styles = {
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#ecf0f1",
    justifyContent: "center",
    alignItems: "stretch"
  },
  input: {
    paddingLeft: 20,
    borderRadius: 50,
    height: 50,
    fontSize: 25,
    backgroundColor: 'white',
    borderWidth: 1,
    marginBottom: 20,
    color: '#34495e'

  },
  buttonContainer: {
    height: 50,
    borderRadius: 50,
    backgroundColor: '#1abc9c',
    paddingVertical: 10,
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: '#34495e',
    fontSize: 20
  }
}