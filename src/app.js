import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAYD79kjLJbiouUys-kCE2NVhT2TDD-juQ',
            authDomain: 'authentication-f44bc.firebaseapp.com',
            databaseURL: 'https://authentication-f44bc.firebaseio.com',
            projectId: 'authentication-f44bc',
            storageBucket: 'authentication-f44bc.appspot.com',
            messagingSenderId: '165536103909'
        });
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
};

export default App;