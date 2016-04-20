'use strict';

import React, {
  AppRegistry,
  StyleSheet,
  Component,
  Text,
  View,
} from 'react-native';

class TabComponentDemo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            see index.ios.js
          </Text>
        </View>
    );
  }

}

let styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
});

AppRegistry.registerComponent('TabComponentDemo', () => TabComponentDemo);
