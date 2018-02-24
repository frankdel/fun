import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
		<Text>From Frank: "hello CREW!!!!" </Text>
		<Text>From ILIAN: "IT IS WORKING!!!!" </Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Hi this is Muntaser Qutub</Text>
		<Text>E-Receipts</Text>
		<Button
  title="Click Me To Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
