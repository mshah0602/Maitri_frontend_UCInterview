import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes'];

  return (
    <View style={styles.container}>
      {fruits.map((fruit, i) => {
        return (
          <View key={i} style={styles.box}>
            <Text>{fruit}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 5,
    width: 200,
    alignItems: 'center',
  },
});

