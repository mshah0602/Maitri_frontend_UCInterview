import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [textColor, setTextColor] = useState("");
  const [background, setBackground] = useState("white");

  const handleChangeColor = () => {
    if (textColor === "" || textColor.trim() === "") {
      setBackground("white");
    } else {
      setBackground(textColor);
    }
  }

  return (
    <View style={[styles.main, { backgroundColor: background }]}>
      <TextInput
        style={styles.box}
        placeholder="type color name or hex code"
        value={textColor}
        onChangeText={(val) => setTextColor(val)}
      />
      <Button title="Change Color" onPress={handleChangeColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff'
  }
});

