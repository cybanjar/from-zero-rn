import React from 'react';
import { Text, View, ScrollView, SafeAreaView, StatusBar, Image } from 'react-native';
import Login from './src/pages/Login.js';
import Register from './src/pages/Register.js';

const App = () => {
  return (
    <View>
      <StatusBar barStyle="default" />
      <SafeAreaView>
        {/* <ScrollView > */}
          <Login />
          <Register />

        {/* </ScrollView> */}
      </SafeAreaView>
    </View>
  );
};

export default App;