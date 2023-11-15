import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Reves() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [inicio, setInicio] = useState(0);
  const [final, setFinal] = useState(0);

  function handleInput(texto) {
    setInput(texto);
  }

  function handleInicio(value) {
    setInicio(parseInt(value));
  }

  function handleFinal(value) {
    setFinal(parseInt(value));
  }

  function handleRevertir() {
    const texto = revertirString(input, inicio, final);
    setOutput(texto);
  }

  function revertirString(texto, start, end) {
    const inicial = texto.substring(0, start);
    const revertido = texto.substring(start, end + 1).split('').reverse().join('');
    const restante = texto.substring(end + 1);
    return inicial + revertido + restante;
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Texto"
        value={input}
        onChangeText={handleInput}
      />
      <TextInput
        style={styles.input}
        value={inicio.toString()}
        onChangeText={handleInicio}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={final.toString()}
        onChangeText={handleFinal}
        keyboardType="numeric"
      />
      <Button title="Revertir" onPress={handleRevertir} />
      <Text style={styles.output}>Texto: {output}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  output: {
    marginTop: 20,
    fontSize: 18,
  },
});
