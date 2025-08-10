import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function App() {
  const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes'];
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type something"
        onChangeText={setText}
        value={text}
      />

      {/* Show fruits */}
      {fruits.map((fruit, i) => (
        <View key={i} style={styles.box}>
          <Text>{fruit}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    paddingLeft: 5,
  },
  box: {
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 5,
    width: 200,
    alignItems: 'center',
  },
});

