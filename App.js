import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState({ color: '' });


  function setRed() {
    alert("Set to Red!");
    setColor ({ color: 'red'});
  
    return setRed;
  }
  
  function setBlue() {
    alert("Set to Blue!");
    setColor ({ color: 'blue'});
  
    return setBlue;
  }

  function setWhite() {
    alert("Back to white!");
    setColor ({ color: 'white'});
  
    return setWhite;
  }

  return (
    <View style={[styles.container, {backgroundColor: color.color}]}>
      <Text style={styles.text}>Welcome! Press a button. </Text>
      <View style={styles.space}/>
      <Button title="Red" color='red' onPress={setRed} />
      <View style={styles.space}/>
      <Button title="Blue" color='blue' onPress={setBlue} />
      <View style={styles.space}/>
      <Button title="Reset" color='black' onPress={setWhite} />
      <View style={styles.space}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  space: {
    height: 5
  },
  text: {
    fontSize: 40
  },
});